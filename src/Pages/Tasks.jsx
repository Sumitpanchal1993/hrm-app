import React from 'react'
import "./Tasks.css"

function Tasks() {
    return (
        <>
            <div className='task-base'>
                <div className="task-dashboard">
                    <h2>Task Dashboard</h2>
                    <div>
                        <button className='primaryButton'>Add Task</button>
                    </div>
                </div>
                <div className="task-cards-container">
                    <div className='task-card proposed-task'>
                        <div> <h4>Proposed Tasks </h4>
                            <p className='task-count'>10</p></div>
                        <span className="material-symbols-outlined">
                            assignment_add
                        </span>


                    </div>
                    <div className='task-card started-task'>
                        <h4>Started Tasks </h4>
                        <p className='task-count'>20</p>
                        <span className="material-symbols-outlined">
                            add_task
                        </span>
                    </div>
                    <div className='task-card pending-task'>
                        <h4>Pending Tasks </h4>
                        <p className='task-count'>30</p>
                        <span className="material-symbols-outlined">
                            pending_actions
                        </span>
                    </div>
                    <div className='task-card completed-task'>
                        <h4>Completed Tasks </h4>
                        <p className='task-count'>40</p>
                        <span className="material-symbols-outlined">
                            <span className="material-symbols-outlined">
                                check_circle
                            </span>
                        </span>
                    </div>
                </div>
                <div className="task-table">
                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox" name="" id="" /></th>
                                <th>Type</th>
                                <th>Detail</th>
                                <th>Target Date</th>
                                <th>Status</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>Bug</td>
                                <td>Accessibilty Issue in the UI</td>
                                <td>26-11-2026</td>
                                <td>Completed</td>
                                <td>
                                    <button className='secondaryButton'>Update Task</button></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>Audit</td>
                                <td>Complete the governance Audit of the app</td>
                                <td>26-11-2026</td>
                                <td>Completed</td>
                                <td>
                                    <button className='secondaryButton'>Update Task</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Tasks