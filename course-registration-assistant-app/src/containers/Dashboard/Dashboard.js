import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import CourseSummary from '../../components/CourseSummary';
import Week from '../../components/Week';
import { userLogout } from '../Login/loginSlice';
import { getAllCourses, selectCourse, deselectCourse } from './DashboardSlice';
import classNames from 'classnames';
import style from './Dashboard.module.scss';
import SearchNla25 from '../SearchNla25/SearchNla25'
import { Button } from 'react-bootstrap';

const timeTableLabel = ["7:00", "8:00", "9:00", "10:00","11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];
const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Dashboard = () => {

  const dispatch = useDispatch();
  const courses = useSelector(state => {
    return state.dashboard.selectedCourses;
  }); 

  useEffect(() => {
    dispatch(getAllCourses());
    setTimeout(function(){ dispatch(selectCourse("23723")); }, 1000);
    setTimeout(function(){ dispatch(selectCourse("23725")); }, 2000);
    setTimeout(function(){ dispatch(selectCourse("23724")); }, 3000);
    setTimeout(function(){ dispatch(selectCourse("23752")); }, 4000);
    setTimeout(function(){ dispatch(selectCourse("23753")); }, 5000);
    
    setTimeout(function(){ dispatch(deselectCourse("23724")); }, 7500);
    
  }, []);

  const history = useHistory();

  const logout = () => {
    dispatch(userLogout());
    history.replace("/login");
  }

  return (
    <div className={classNames('row', {[style.timetable]: true})}>
      {/* <div className="col">
        <div className="row"> */}
          <div className="col-7">
            <Week timeFrames={timeTableLabel} days={weekDays} courses={courses}/>
          </div>
          <div className={classNames('col-3', {[style.courses_margin]: true})} >
          <Button className={style.buttonSearch}><Link to="/search">Search Page</Link></Button>
            <CourseSummary />
          </div>
          <div className="col-2">
            {/* <SearchNla25></SearchNla25> */}
            
            </div>
        </div>
    //   </div>
    // </div>
  )
}

export default Dashboard;