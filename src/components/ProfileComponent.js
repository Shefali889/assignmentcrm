import React, { useState } from 'react';
import IconAvatar from './icons/IconAvatar'; // Assuming you have this component defined
import IconSocialRow from './icons/IconSocialRow'; // Assuming you have this component defined
import IconActionButtons from './icons/IconActionButtons'; // Assuming you have this component defined
import IconLastUpdated from './icons/IconLastUpdated'; // Assuming you have this component defined
import './ProfileComponent.css'; // Import your scoped CSS

const ProfileComponent = () => {
  const [showModal, setShowModal] = useState(false);
const  [profile ,setProfile] = useState({
    name: 'William Sample',
    title: 'Senior Product Manager',
    email: 'williamsample@gmail.com',
    phone: '+91 9021232326',
    currentOrganization: 'World Bank Group',
    skills: 'HTML, CSS, Javascript',
    availableFrom: 'Jul 14, 2023',
    currentSalary: '$6000',
    noticePeriod: '90 Days',
    address: '9400 Ashton Rd, Philadelphia...',
    experience: '5 Years',
    dob: '15 June 1993',
    relevantExperience: '7 Years',
    salaryExpectation: '$90000',
    status: 'Submitted to Client',
    languageSkills: 'English (Elementary proficiency)'
  })


  const [editProfile, setEditProfile] = useState({ ...profile });

  const updateProfile = () => {
    // Handle profile update logic here
    // console.log('Updating profile:', editProfile);
    setProfile(editProfile)
    // For demo purpose, just close the modal after updating
    closeModal();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="profile-component">
      <div className="profilec1">
        <div className="c1-content">
          <p className="previous">Candidates</p>
          <p className="previous">&gt;</p>
          <p className="present">Robert Hardy</p>
          <br />
          <p className="present">Id - 231</p>
        </div>
        <div className="c1-buttons">
          <button className="btn">Request Profile Update</button>
          <button className="btn">Previous</button>
          <button className="btn">Next</button>
        </div>
      </div>
      <div className="profilec2">
        <div className="c2-avatar">
          <IconAvatar className={'avataricon'}/>
          <div className="c2-info">
            <div className="c2-info-header">
              <p className="c2-info-name">{profile.name}</p>
              <IconSocialRow />
            </div>
            <div className="c2-info-details">
              <p className="c2-info-details-text">{profile.title}</p>
              <p className="c2-info-details-text">United States</p>
              <p className="c2-info-details-text">Dallas</p>
            </div>
          </div>
        </div>
        <div className="c2-actions" onClick={() => setShowModal(true)} >
          <IconActionButtons />
        </div>
      </div>
      <div className="profilec3">
        <div className="c3-contact">
          <p className="c3-text">williamsample@gmail.com</p>
          <p className="c3-text">+91 9021232326</p>
        </div>
        <div className="c3-last-updated">
          <IconLastUpdated />
        </div>
      </div>
      <div className="profilebody">
        <div className="info-group">
          <label className="info-label">Current Organization</label>
          <span className="info-value">{profile.currentOrganization}</span>
        </div>
        <div className="info-group">
          <label className="info-label">Skills</label>
          <span className="info-value">{profile.skills}</span>
        </div>
        <div className="info-group">
          <label className="info-label">Available From</label>
          <span className="info-value">{profile.availableFrom}</span>
        </div>
        <div className="info-group">
          <label className="info-label">Current Salary</label>
          <span className="info-value">{profile.currentSalary}</span>
        </div>
        <div className="info-group">
          <label className="info-label">Notice Period</label>
          <span className="info-value">{profile.noticePeriod}</span>
        </div>
        <div className="info-group">
          <label className="info-label">Full Address</label>
          <span className="info-value">{profile.address}</span>
        </div>
        <div className="info-group">
          <label className="info-label">Total Experience</label>
          <span className="info-value">{profile.experience}</span>
        </div>
        <div className="info-group">
          <label className="info-label">Date of Birth</label>
          <span className="info-value">{profile.dob}</span>
        </div>
        <div className="info-group">
          <label className="info-label">Relevant Experience</label>
          <span className="info-value">{profile.relevantExperience}</span>
        </div>
        <div className="info-group">
          <label className="info-label">Salary Expectation</label>
          <span className="info-value">{profile.salaryExpectation}</span>
        </div>
        <div className="info-group">
          <label className="info-label">Status</label>
          <span className="info-value">{profile.status}</span>
        </div>
        <div className="info-group">
          <label className="info-label">Language Skills</label>
          <span className="info-value">{profile.languageSkills}</span>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Edit Profile</h2>
            <form onSubmit={updateProfile}>
              <div className="form-group">
                <label>Name</label>
                <input
                  value={editProfile.name}
                  onChange={(e) => setEditProfile({ ...editProfile, name: e.target.value })}
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Title</label>
                <input
                  value={editProfile.title}
                  onChange={(e) => setEditProfile({ ...editProfile, title: e.target.value })}
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  value={editProfile.email}
                  onChange={(e) => setEditProfile({ ...editProfile, email: e.target.value })}
                  type="email"
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  value={editProfile.phone}
                  onChange={(e) => setEditProfile({ ...editProfile, phone: e.target.value })}
                  type="tel"
                />
              </div>
              <div className="form-group">
                <label>Current Organization</label>
                <input
                  value={editProfile.currentOrganization}
                  onChange={(e) =>
                    setEditProfile({ ...editProfile, currentOrganization: e.target.value })
                  }
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Skills</label>
                <input
                  value={editProfile.skills}
                  onChange={(e) => setEditProfile({ ...editProfile, skills: e.target.value })}
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Available From</label>
                <input
                  value={editProfile.availableFrom}
                  onChange={(e) =>
                    setEditProfile({ ...editProfile, availableFrom: e.target.value })
                  }
                  type="date"
                />
              </div>
              <div className="form-group">
                <label>Current Salary</label>
                <input
                  value={editProfile.currentSalary}
                  onChange={(e) =>
                    setEditProfile({ ...editProfile, currentSalary: e.target.value })
                  }
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Notice Period</label>
                <input
                  value={editProfile.noticePeriod}
                  onChange={(e) =>
                    setEditProfile({ ...editProfile, noticePeriod: e.target.value })
                  }
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  value={editProfile.address}
                  onChange={(e) => setEditProfile({ ...editProfile, address: e.target.value })}
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Experience</label>
                <input
                  value={editProfile.experience}
                  onChange={(e) =>
                    setEditProfile({ ...editProfile, experience: e.target.value })
                  }
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  value={editProfile.dob}
                  onChange={(e) => setEditProfile({ ...editProfile, dob: e.target.value })}
                  type="date"
                />
              </div>
              <div className="form-group">
                <label>Relevant Experience</label>
                <input
                  value={editProfile.relevantExperience}
                  onChange={(e) =>
                    setEditProfile({ ...editProfile, relevantExperience: e.target.value })
                  }
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Salary Expectation</label>
                <input
                  value={editProfile.salaryExpectation}
                  onChange={(e) =>
                    setEditProfile({ ...editProfile, salaryExpectation: e.target.value })
                  }
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <input
                  value={editProfile.status}
                  onChange={(e) => setEditProfile({ ...editProfile, status: e.target.value })}
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Language Skills</label>
                <input
                  value={editProfile.languageSkills}
                  onChange={(e) =>
                    setEditProfile({ ...editProfile, languageSkills: e.target.value })
                  }
                  type="text"
                />
              </div>
              <button type="submit">Save</button>
              <button type="button" onClick={closeModal}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
