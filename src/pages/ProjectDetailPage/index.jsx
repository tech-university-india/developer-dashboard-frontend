import {React,useState} from 'react';
import Navbar from '../../components/Navbar';
import DeepdivePageHeader from '../../components/DeepdivePageHeader';
import DeepdivePageBodyContainer from '../../components/DeepdivePageBodyContainer';
import CostDisplayer from '../../components/CostDisplayer';
import SuppementaryCostTableModal from '../../components/SupplementaryCostTableModal';
import CommitDisplayer from '../../components/CommitDisplayer';
import VelocityDisplayer from '../../components/VelocityDisplayer';


function ProjectDetailPage() {

  const[costTable, setCostTable] = useState(false)
  const role=localStorage.getItem('role')

  const developerDetailPage=()=>{
    return(
      <div>
      <Navbar />
        <SuppementaryCostTableModal costTable={costTable} setCostTable={setCostTable} />
     <DeepdivePageHeader>
        <CommitDisplayer/>
        <VelocityDisplayer/>
      </DeepdivePageHeader>
     <DeepdivePageBodyContainer >
      </DeepdivePageBodyContainer>
    </div>)
  }

  const managerDetailPage=()=>{
    return(
      <div>
      <Navbar />
        <SuppementaryCostTableModal costTable={costTable} setCostTable={setCostTable} />
     {!costTable&&<DeepdivePageHeader>
        <CostDisplayer setCostTable={setCostTable} costTable={costTable}/>
      </DeepdivePageHeader>}
     {!costTable&&<DeepdivePageBodyContainer>
      </DeepdivePageBodyContainer>}
    </div>
    )
  }

  const leadershipDetailPage=()=>{
    return(
      <div>
      <Navbar />
        <SuppementaryCostTableModal costTable={costTable} setCostTable={setCostTable} />
     {!costTable&&<DeepdivePageHeader>
        
        <CostDisplayer setCostTable={setCostTable} costTable={costTable}/>
      </DeepdivePageHeader>}
     {!costTable&&<DeepdivePageBodyContainer>
      </DeepdivePageBodyContainer>}
    </div>
    )
  }
    if(role==='developer'){
      return developerDetailPage()
    }
    else if(role==='manager'){
      return managerDetailPage()
    }
    else if(role==='leadership'){
      return leadershipDetailPage()
    } 
}

export default ProjectDetailPage;
