import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import GenAIFactory from './pages/GenAIFactory';
import CommandCenter from './pages/CommandCenter';
import GenAIAdoption from './pages/GenAIAdoption';
import EngineeringExcellence from './pages/EngineeringExcellence';
import GenAIServices from './pages/GenAIServices';
import TalentReadiness from './pages/TalentReadiness';
import InnovationPlan from './pages/InnovationPlan';
import Cipher from './pages/Cipher';
import CopilotAdoption from './pages/CopilotAdoption';
import SuccessStory from './pages/SuccessStory';
import UseCasesPoster from './pages/UseCasesPoster';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genai-factory" element={<GenAIFactory />} />
        <Route path="/command-center" element={<CommandCenter />} />
        <Route path="/genai-adoption" element={<GenAIAdoption />} />
        <Route path="/engineering-excellence" element={<EngineeringExcellence />} />
        <Route path="/genai-services" element={<GenAIServices />} />
        <Route path="/talent-readiness" element={<TalentReadiness />} />
        <Route path="/innovation-plan" element={<InnovationPlan />} />
        <Route path="/cipher" element={<Cipher />} />
        <Route path="/genai-adoption/copilot" element={<CopilotAdoption />} />
        <Route path="/genai-adoption/success-story" element={<SuccessStory />} />
        <Route path="/genai-adoption/success-story/usecases-poster" element={<UseCasesPoster />} />
        <Route path="/genai-factory/usecases-poster" element={<UseCasesPoster />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
