import React from 'react';
import IconAvatar from './icons/IconAvatar'; // Assuming you have this component defined
import IconToggle from './icons/IconToggle'; // Assuming you have this component defined
import './SectionsComponent.css'; // Import your scoped CSS as CSS modules

const SectionsComponent = () => {
  return (
    <div className={'sections'}>
    <div className={'sectionsc1'}>
      <p className={'sectionsinactive'}>All Details</p>
      <div className={'sectionsactive'}>
        <p>Assigned Jobs</p>
      </div>
      <p className={'sectionsinactive'}>Related Emails</p>
      <p className={'sectionsinactive'}>Candidate Questions</p>
      <p className={'sectionsinactive'}>Hotlists</p>
      <p className={'sectionsinactive'}>Related Deals</p>
      <p className={'sectionsinactive'}>Contact(s) Pitched</p>
    </div>
    <div className={'sectionsc2'}>
      <p className={'sectionsassigned-job'}>Assigned Job to William Sample</p>
      <div className={'sectionsc2-buttons'}>
        <button className={'sectionsc2-button'}>Assign To Job</button>
        <button className={'sectionsc2-button1'}>View All Assigned Jobs</button>
      </div>
    </div>
    <div className={'sectionsc3'}>
      <div className={'sectionsrow'}>
        <div className={'sectionsavatar-info'}>
          <IconAvatar className={'sectionsavataricon'}/>
          <div className={'sectionsjob-info'}>
            <p className={'sectionsjob-title'}>Senior Product Manager</p>
            <p className={'sectionscompany-name'}>Recruit CRM</p>
          </div>
        </div>
        <div className={'sectionscandidate-info'}>
          <p className={'sectionscandidate-name'}>William Sample</p>
          <p className={'sectionsdate'}>Jul 10, 2023</p>
        </div>
        <button className={'sectionsassigned-btn'}>Assigned</button>
        <button className={'sectionsview-files-btn'}>View Files</button>
        <IconToggle />
      </div>
    

      <div className={'sectionsrow'}>
        <div className={'sectionsavatar-info'}>
          <IconAvatar className={'sectionsavataricon'}/>
          <div className={'sectionsjob-info'}>
            <p className={'sectionsjob-title'}>Senior Product Manager</p>
            <p className={'sectionscompany-name'}>Recruit CRM</p>
          </div>
        </div>
        <div className={'sectionscandidate-info'}>
          <p className={'sectionscandidate-name'}>William Sample</p>
          <p className={'sectionsdate'}>Jul 10, 2023</p>
        </div>
        <button className={'sectionsassigned-btn'}>Assigned</button>
        <button className={'sectionsview-files-btn'}>View Files</button>
        <IconToggle />
      </div>


      <div className={'sectionsrow'}>
        <div className={'sectionsavatar-info'}>
          <IconAvatar className={'sectionsavataricon'}/>
          <div className={'sectionsjob-info'}>
            <p className={'sectionsjob-title'}>Senior Product Manager</p>
            <p className={'sectionscompany-name'}>Recruit CRM</p>
          </div>
        </div>
        <div className={'sectionscandidate-info'}>
          <p className={'sectionscandidate-name'}>William Sample</p>
          <p className={'sectionsdate'}>Jul 10, 2023</p>
        </div>
        <button className={'sectionsassigned-btn'}>Assigned</button>
        <button className={'sectionsview-files-btn'}>View Files</button>
        <IconToggle />
      </div>
    </div>
  </div>
  )
}

export default SectionsComponent