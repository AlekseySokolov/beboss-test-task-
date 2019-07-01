import React from 'react';
import {Header} from "./components/Header/Header";
import {PutTheLinkSection} from "./components/PutTheLinkSection/PutTheLinkSection";
import {InfoSection} from "./components/InfoSection/InfoSection";
import {JumbotronSection} from "./components/JumbotronSection/JumbotronSection";
import {PlacementRulesSection} from "./components/PlacementRules/PlacementRulesSection";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import {AdditionalInformation} from "./components/AdditionalInformation/AdditionalInformation";
import {Footer} from "./components/Footer/Footer";
import './App.css';

const App = () => {
  return (
    <div id="App">
      <div id="App__wrap">
          <Header />
          <div className="main-page">
            <PutTheLinkSection />
            <InfoSection />
            <JumbotronSection />
            <PlacementRulesSection />
            <FeedbackForm />
            <AdditionalInformation />
          </div>
      </div>
        <Footer/>
    </div>
  );
};

export default App;
