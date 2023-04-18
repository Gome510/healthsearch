//https://stackoverflow.com/questions/68662850/datepicker-bootstrap-5
import React from "react";

function DatePicker(){
    return(
        <div class="datepicker row">
          <div class="col-lg-3 col-sm-6">
              <label for="startDate">Start</label>
              <input id="startDate" class="form-control" type="date" />
              <span id="startDateSelected"></span>
          </div>
          <div class="col-lg-3 col-sm-6">
              <label for="endDate">End</label>
              <input id="endDate" class="form-control" type="date" />
              <span id="endDateSelected"></span>
          </div>
        </div>
    );
}

export default DatePicker;