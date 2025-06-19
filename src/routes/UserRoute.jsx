import { Routes, Route } from "react-router-dom";
import Home from "../app/home";
// import Page404 from "../app/page404";
export default function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/" element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="contact-us" element={<ContactPage />} />
      <Route path="projects" element={<Projects />} />
      <Route path="pipe-cold-cutting" element={<PipeColdCutting />} />
      <Route path="services" element={<OurServices />} />
      <Route path="mechanical-division" element={<MED />} />
      <Route path="speciality-service-division" element={<SSD />} />
      <Route path="mechanical-division/piping" element={<Piping />} />
      <Route path="mechanical-division/equipment-erection" element={<EquipmentErection />} />
      <Route path="mechanical-division/steel-structure" element={<SteelStructure />} />
      <Route path="mechanical-division/pre-engineered-buildings" element={<PreEngineeredBuildings />} />
      <Route path="mechanical-division/valves-and-instruments" element={<ValvesAndInstruments />} />
      <Route path="speciality-service-division/coating-and-painting" element={<CoatingPainting />} />
      <Route path="speciality-service-division/thermal-and-acoustic-insulation" element={<ThermalAcousticInsulation />} />
      <Route path="speciality-service-division/fireproofing" element={<FireProofing />} />
      <Route path="speciality-service-division/scaffolding-services" element={<ScaffoldingServices />} />
      <Route path="speciality-service-division/refractory-services" element={<RefractoryServices />} />
      <Route path="speciality-service-division/waterproofing" element={<WaterProofing />} />
      <Route path="speciality-service-division/electrical-heat-tracing" element={<ElectricalHeatTracing />} />
      <Route path="industrial-materials-supply" element={<IndustrialMaterialSupply />} />
      <Route path="*" element={<Page404 />} /> */}
      {/* <Route path="*" element={<Page404 />} /> */}
    </Routes>
  );
}
