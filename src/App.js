import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import WhatsAppButton from "./components/WhatsAppButton";
import CostCalculator from "./pages/CostCalculator";
import RequirementsChecklist from "./pages/RequirementsChecklist";
import EcommerceDevelopmentServices from './pages/EcommerceDevelopmentServices';
import AspnetCoreDevelopmentServices from './pages/asp-net-core-development-services';
import OutsourceWebDevelopmentPakistan from "./pages/OutsourceWebDevelopmentPakistan";


import WordPressDevelopmentServices from "./pages/WordPressDevelopmentServices";
import CustomSchoolManagementSoftwareDevelopment from "./pages/CustomSchoolManagementSoftwareDevelopment";
import CustomBusinessAutomationSolutions from "./pages/CustomBusinessAutomationSolutions";

import AuthorPage from "./pages/AuthorPage";
import { RelatedReading } from "./components/RelatedReading";

// Lazy loaded pages - each page loads only when visited
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsofServices = lazy(() => import("./components/TermsofServices"));
const CustomSoftwareDevelopment = lazy(
	() => import("./pages/CustomSoftwareDevelopment"),
);
const WebsiteDevelopmentServices = lazy(
	() => import("./pages/WebsiteDevelopmentServices"),
);
const DigitalMarketingServices = lazy(
	() => import("./pages/Digitalmarketingservices"),
);
const QllmDocsPage = lazy(() => import("./pages/QllmDocsPage"));
const ApiDevelopmentServices = lazy(
	() => import("./pages/ApiDevelopmentServices"),
);
const HireDotnetDevelopers = lazy(() => import("./pages/HireDotnetDevelopers"));
const MobileAppDevelopment = lazy(() => import("./pages/MobileAppDevelopment"));
const OutsourceSoftwareDevelopment = lazy(
	() => import("./pages/OutsourceSoftwareDevelopment"),
);
const AiPoweredSoftware = lazy(() => import("./pages/AiPoweredSoftware"));
const HireReactDevelopers = lazy(() => import("./pages/HireReactDevelopers"));
const HireAngularDevelopers = lazy(
	() => import("./pages/HireAngularDevelopers"),
);
const HealthcareSoftware = lazy(() => import("./pages/HealthcareSoftware"));
const EducationSoftware = lazy(() => import("./pages/EducationSoftware"));
const LegacyModernization = lazy(() => import("./pages/LegacyModernization"));
const OutsourceApiDevelopment = lazy(
	() => import("./pages/OutsourceApiDevelopment"),
);
const WebAppDevelopment = lazy(() => import("./pages/WebAppDevelopment"));


const RealEstateSoftware = lazy(() => import("./pages/RealEstateSoftware"));
const FinanceManagementSystem = lazy(
	() => import("./pages/FinanceManagementSystem"),
);
const GuestPostPage = lazy(
	() => import("./pages/GuestPostPage"),
);
import "./styles/global.css";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";

function App() {
	return (
		<HelmetProvider>
			<BrowserRouter>
				<div className="App">
					<Header />
					<ScrollToTop />
					<Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/services" element={<Services />} />
							<Route path="/projects" element={<Projects />} />
							<Route path="/projects/:slug" element={<ProjectDetails />} />
							<Route path="/privacy-policy" element={<PrivacyPolicy />} />
							<Route path="/terms-of-services" element={<TermsofServices />} />
							<Route path="/blog" element={<Blog />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/blog/:slug" element={<BlogArticle />} />
							<Route
								path="/custom-software-development-services"
								element={
									<>
										<CustomSoftwareDevelopment />
										<RelatedReading servicePath="/custom-software-development-services" />
									</>
								}
							/>
							<Route
								path="/website-development-services"
								element={<WebsiteDevelopmentServices />}
							/>
							<Route
								path="/digital-marketing-services"
								element={<DigitalMarketingServices />}
							/>
							<Route
								path="/ai-document-management-software"
								element={<QllmDocsPage />}
							/>
							<Route
								path="/document-controller-software"
								element={<Navigate to="/ai-document-management-software" replace />}
							/>
							<Route
								path="/qllmdocs"
								element={<Navigate to="/ai-document-management-software" replace />}
							/>
							<Route
								path="/api-development-services"
								element={
									<>
										<ApiDevelopmentServices />
										<RelatedReading servicePath="/api-development-services" />
									</>
								}
							/>
							<Route
								path="/hire-dotnet-developers-pakistan"
								element={
									<>
										<HireDotnetDevelopers />
										<RelatedReading servicePath="/hire-dotnet-developers-pakistan" />
									</>
								}
							/>
							<Route
								path="/mobile-app-development"
								element={
									<>
										<MobileAppDevelopment />
										<RelatedReading servicePath="/mobile-app-development" />
									</>
								}
							/>
							<Route
								path="/outsource-software-development-to-pakistan"
								element={<OutsourceSoftwareDevelopment />}
							/>
							<Route
								path="/ai-powered-software-solutions"
								element={
									<>
										<AiPoweredSoftware />
										<RelatedReading servicePath="/ai-powered-software-solutions" />
									</>
								}
							/>
							<Route
								path="/hire-react-developers-pakistan"
								element={<HireReactDevelopers />}
							/>
							<Route
								path="/hire-angular-developers-pakistan"
								element={<HireAngularDevelopers />}
							/>
							<Route
								path="/healthcare-software-development-pakistan"
								element={<HealthcareSoftware />}
							/>
							<Route
								path="/education-software-development-pakistan"
								element={
									<>
										<EducationSoftware />
										<RelatedReading servicePath="/education-software-development-pakistan" />
									</>
								}
							/>
							<Route
								path="/legacy-system-modernization-services"
								element={<LegacyModernization />}
							/>
							<Route
								path="/web-application-development-services"
								element={
									<>
										<WebAppDevelopment />
										<RelatedReading servicePath="/web-application-development-services" />
									</>
								}
							/>
							<Route
								path="/outsource-api-development-to-pakistan"
								element={<OutsourceApiDevelopment />}
							/>
							<Route
								path="/real-estate-software-development"
								element={<RealEstateSoftware />}
							/>
							<Route
								path="/finance-management-system"
								element={<FinanceManagementSystem />}
							/>
							<Route path="/write-for-us" element={<GuestPostPage />} />
							<Route
								path="/outsource-web-development-to-pakistan"
								element={<OutsourceWebDevelopmentPakistan />}
							/>
							<Route
								path="/software-development-cost-calculator"
								element={<CostCalculator />}
							/>
							<Route
								path="/software-project-requirements-checklist"
								element={<RequirementsChecklist />}
							/>
							<Route
								path="/ecommerce-development-services"
								element={<EcommerceDevelopmentServices />}
							/>
							<Route
								path="/asp-net-core-development-services"
								element={<AspnetCoreDevelopmentServices />}
							/>
							<Route
								path="/wordpress-development-services"
								element={<WordPressDevelopmentServices />}
							/>
							<Route
								path="/custom-school-management-software-development"
								element={<CustomSchoolManagementSoftwareDevelopment />}
							/>
							<Route
								path="/custom-business-automation-solutions"
								element={<CustomBusinessAutomationSolutions />}
							/>
							<Route path="/outsource-mobile-app-development-to-pakistan"
  element={<Navigate to="/blog/outsource-mobile-app-development-to-pakistan" replace />} />
							<Route
	path="/mobile-app-development-cost-in-pakistan"
	element={<Navigate to="/blog/mobile-app-development-cost-in-pakistan" replace />}
/>
							<Route path="/author/:authorSlug" element={<AuthorPage />} />
							


						</Routes>
					</Suspense>
					<Footer />
					<div>
						<WhatsAppButton />
						<ChatBot />
					</div>
				</div>
			</BrowserRouter>
		</HelmetProvider>
	);
}

export default App;
