import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Table from './RightContainer/Table/Table';
import DefaultContainer from './RightContainer/DefaultContainer/DefaultContainer';
import columnData from './columnData.json'
import tableData from './tableData.json'

function MainContainer() {
    const [selectedTab, setSelectedTab] = useState('default');
    function handleClick ({target}) { // when click on new sidebar selection, update selected tab
      setSelectedTab(target.attributes.sidebarvalue.value)
    }

    const [columns, setColumns] = useState(columnData.find(obj => obj.value === selectedTab).data);
    const [data, setData] = useState(tableData.find(obj => obj.value === selectedTab).data);
    useEffect(() => { // when selected tab is changed, update table columns & data displayed
        setColumns(columnData.find(obj => obj.value === selectedTab).data)
        setData(tableData.find(obj => obj.value === selectedTab).data)
    }, [selectedTab]);


    return (
        <div className='container-fluid shelterContainer'>
            <Sidebar clickFunc={handleClick}/>
            {   (selectedTab === 'default') ? <DefaultContainer />
                : (selectedTab !== 'about') ? <Table columns={columns} data={data}/>
                : <DefaultContainer />
            }
        </div>
    );
  }
  
  export default MainContainer;
  