import React from 'react';
import './App.css';
import { DashboardNav } from './dashboard-nav';
import { UserCard } from './user-card';
import { LoadButton } from './load-button';
export const Dashboard = () => {

  return (
    <div className='dashboard-container'>
      <DashboardNav/>
      <div className='column-container'>
      <div>{UserCard}</div>
      <div>{UserCard}</div>
      <div>{UserCard}</div>
      </div>
      <LoadButton/>
    </div>
  )
}