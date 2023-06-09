import React, { useState }  from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
  
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
);

function FilterSearch(){
    return(
        <Dropdown.Menu as={CustomMenu} show>
            <Dropdown.Item eventKey="1">Red</Dropdown.Item>
            <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
            <Dropdown.Item eventKey="3">Orange</Dropdown.Item>
            <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
            
        </Dropdown.Menu>
    );
}

export default FilterSearch;