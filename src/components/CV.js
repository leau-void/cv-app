import "../styles/cv.css";
import React, { Component } from "react";

class CV extends Component {
  render() {
    const { general, professional, education, skills } = this.props.state;
    return (
      <div className="CV">
        <header className="CV__header">
          <h1 className="CV__name">{general.name}</h1>
          <h2 className="CV__title">{general.title}</h2>
        </header>
        <main className="CV__main">
          <div className="CV__zone">
            <div className="CV__zone-title">Description</div>
            <div className="CV__description">{general.description}</div>
          </div>

          <div className="CV__zone">
            <div className="CV__zone-title">Professional Experience</div>
            {professional.map((entry, index) => (
              <div key={index} className="CV__entry">
                <div className="CV__dates">{entry.from + " - " + entry.to}</div>
                <div className="CV__info">
                  <div className="CV__main-info">{entry.title}</div>
                  <div className="CV__secondary-info">
                    {entry.company + ", " + entry.city}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="CV__zone">
            <div className="CV__zone-title">Education</div>
            {education.map((entry, index) => (
              <div key={index} className="CV__entry">
                <div className="CV__dates">{entry.from + " - " + entry.to}</div>
                <div className="CV__info">
                  <div className="CV__main-info">{entry.degree}</div>
                  <div className="CV__secondary-info">
                    {entry.school + ", " + entry.city}
                  </div>
                </div>
              </div>
            ))}
            <div className="CV__skills">
              <div className="CV__zone-title">Skills</div>
              <div className="CV__skill-list">
                {skills.saved.map((skill, index) => (
                  <div key={index} className="CV__skill">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <div className="CV__sidebar">
          <div>
            <div className="CV__zone-title">Address</div>
            <div className="CV__secondary-info">{general.address}</div>
          </div>
          <div>
            <div className="CV__zone-title">Phone</div>
            <div className="CV__secondary-info">{general.phone}</div>
          </div>
          <div>
            <div className="CV__zone-title">Email</div>
            <div className="CV__secondary-info CV__email">{general.email}</div>
          </div>
        </div>
        <footer className="CV__footer"></footer>
      </div>
    );
  }
}

export default CV;
