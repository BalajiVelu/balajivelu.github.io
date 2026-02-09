import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink, 
  ChevronRight,
  Sparkles,
  Box,
  Layers,
  Cpu,
  ArrowLeft,
  Youtube,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

// Project data - Using v1 generated images for cards, website images for detail pages
const projects = [
  {
    id: '01',
    title: 'Industrial Metaverse',
    subtitle: 'Digital Twin & AR Application Development',
    cardImage: '/website_industrial_metaverse.jpg',  // Website image for card
    detailImage: '/project_01.jpg', // Original website detail image
    company: 'BMW Group',
    fullTitle: 'Digital Twin for Automotive Plant Construction',
    description: 'Leveraging Real-time 3D Visualization & BIM Integration to Enhance Construction Efficiency',
    demoLink: 'https://youtu.be/SqNr5u2pLLU',
    details: `Automotive plant construction is complex! A single misalignment led to: Delays, Rework, Budget Overruns. Worst Case: Steelworks collisions caused major modifications.

€2.5M+ Cost Overruns due to errors & rework
Disjointed BIM Workflows leading to design clashes
Poor Communication across BIM stakeholders

Construction inefficiencies cost money and affect timelines, quality, and trust.

Planners & Engineers → Need real-time visibility into BIM data
Project Owners → Need a centralized system to track design integrity
Construction Teams → Need instant updates in an interactive environment`
  },
  {
    id: '02',
    title: 'Mixed Reality for Production Planning',
    subtitle: 'Application Development',
    cardImage: '/featured_02.jpg',  // v1 generated image
    detailImage: '/project_02.jpg', // Original website image
    company: 'BMW Group',
    fullTitle: 'Mixed Reality for Production Planning',
    description: 'Application Development for Factory Planning',
    demoLink: 'https://youtu.be/SqNr5u2pLLU',
    details: `Developed MR applications for production planning at BMW Group, enabling planners to visualize and interact with factory layouts in mixed reality.

Key Features:
- Real-time 3D visualization of factory layouts
- Interactive planning tools
- Collaboration features for multiple stakeholders
- Integration with existing planning systems`
  },
  {
    id: '03',
    title: 'HoloLens 2 Tracking',
    subtitle: 'Optimizing Tracking & Registration',
    cardImage: '/featured_03.jpg',  // v1 generated image
    detailImage: '/project_03.jpg', // Original website image
    company: 'BMW Group',
    fullTitle: 'HoloLens 2: Optimizing Tracking & Registration',
    description: 'Advanced tracking optimization for mixed reality applications',
    demoLink: 'https://youtu.be/D2zKM4tD-ts',
    details: `Optimized tracking and registration for HoloLens 2 devices, improving the stability and accuracy of holographic overlays in industrial environments.

Key Achievements:
- Improved tracking stability by 40%
- Reduced drift in holographic overlays
- Enhanced user experience in factory settings
- Developed custom tracking algorithms`
  },
  {
    id: '04',
    title: 'Advanced Tracking for HoloLens 2',
    subtitle: 'Novel Algorithm Development',
    cardImage: '/selected_01.jpg',  // v1 generated image
    detailImage: '/project_04.jpg', // Original website image
    company: 'BMW Group',
    fullTitle: 'Advanced Tracking for HoloLens 2: Novel Algorithm Development',
    description: 'Novel algorithms for improved spatial tracking',
    demoLink: 'https://youtu.be/qzvA2AI198A',
    details: `Developed novel algorithms for advanced tracking on HoloLens 2, pushing the boundaries of what's possible with spatial computing.

Research Focus:
- Novel tracking algorithms
- Sensor fusion techniques
- Machine learning for tracking optimization
- Real-time performance optimization`
  },
  {
    id: '05',
    title: 'MR Adoption in AEC',
    subtitle: 'Framework for Architecture, Engineering & Construction',
    cardImage: '/selected_02.jpg',  // v1 generated image
    detailImage: '/project_05.jpg', // Original website image
    company: 'BMW Group',
    fullTitle: 'MR Adoption Framework for AEC',
    description: 'Research proposal for Mixed Reality adoption in Architecture, Engineering & Construction',
    details: `This research focuses on integrating Mixed Reality (MR) in the Architecture, Engineering, and Construction (AEC) sector. The study develops a user-centered Mixed Reality Framework for AEC (MRF-AEC) to enhance design visualization, construction planning, and on-site assistance.

Challenges Addressed:
- Lack of holistic integration of MR across the entire construction lifecycle
- Tool selection challenges with no structured evaluation method
- On-site implementation issues like lighting and hardware limitations`
  },
  {
    id: '06',
    title: 'Digital Humans',
    subtitle: 'VR & AI Integration',
    cardImage: '/capabilities_card.jpg',  // v1 generated image
    detailImage: '/project_06.jpg', // Original website image
    company: 'Initiative Project',
    fullTitle: 'Digital Humans - VR & AI Integration',
    description: 'Exploring the intersection of digital humans and immersive technologies',
    demoLink: 'https://youtu.be/3ETwZ18qngo',
    details: `An initiative project exploring Digital Humans and Generative AI for XR. This side project investigates how AI-powered digital humans can enhance immersive experiences.

Current Work:
- AI-powered digital human creation
- VR integration for realistic interactions
- Generative AI for character animation
- Real-time rendering optimization`
  },
  {
    id: '07',
    title: 'Real-Time Aircraft Simulation',
    subtitle: 'XR Visualisation',
    cardImage: '/project_aircraft.jpg',  // Generated image
    detailImage: '/project_aircraft.jpg', // Same generated image
    company: 'Personal Project',
    fullTitle: 'Real-Time Aircraft Simulation – XR Visualisation',
    description: 'Built a real-time aircraft telemetry visualizer processing UDP data at 50Hz for VR/XR training',
    demoLink: 'https://www.youtube.com/watch?v=1ALyexeykfQ',
    details: `Built a real-time aircraft telemetry visualizer processing UDP data at 50Hz for VR/XR training.

Key Features:
- Converted latitude, longitude, and altitude into precise 3D positioning via ENU geospatial transformations
- Integrated Chase, Operator, and Gimbal camera systems for multiple user perspectives
- Delivered a high-performance tool for situational awareness and training applications
- Enabled accurate, immersive real-time flight visualization`
  },
  {
    id: '08',
    title: 'AI-Driven Human-to-Robot Teleoperation',
    subtitle: 'R&D - In Progress',
    cardImage: '/project_teleop.jpg',  // Generated image
    detailImage: '/project_teleop.jpg', // Same generated image
    company: 'R&D Project',
    fullTitle: 'AI-Driven Human-to-Robot Teleoperation Interface',
    description: 'Real-time architecture for low-latency human-to-robot control using Unreal Engine 5 and NVIDIA Isaac Sim',
    isInProgress: true,
    details: `Real-Time Architecture: Designing a low-latency data pipeline bridging Unreal Engine 5 and NVIDIA Isaac Sim using Omniverse Live Link to stream high-fidelity skeletal transforms.

ROS 2 Middleware: Developing custom C++ publishers to translate avatar pose data into sensor_msgs/JointState topics, ensuring synchronization between human movement and URDF robotic configurations.

Performance Optimization: Implementing real-time coordinate transformations and retargeting logic in C++, maintaining deterministic execution within a sub-11ms frame budget.`
  }
];

// Experiments data - Using v1 generated images for cards
const experiments = [
  {
    id: 'exp-01',
    title: 'BMW AR Showcase',
    subtitle: 'Interactive AR showroom experience',
    cardImage: '/exp_01.jpg',  // v1 generated image (swapped)
    detailImage: '/exp_bmw_showcase.jpg',
    description: 'This project creates an immersive AR showroom that enhances customer engagement and brand experience!'
  },
  {
    id: 'exp-02',
    title: 'AR Office Navigation',
    subtitle: 'Azure Spatial Anchors',
    cardImage: '/experiment_01.jpg',
    detailImage: '/experiment_01.jpg',
    description: 'Create a persistent AR office navigation system using Azure Spatial Anchors and HoloLens 2 to display colleagues names above their desks for easy identification.'
  },
  {
    id: 'exp-03',
    title: '3D Scanner with Structured Light',
    subtitle: 'MATLAB & Fringe Projection',
    cardImage: '/experiment_02.jpg',  // v1 generated image (swapped)
    detailImage: '/exp_3d_scanner.jpg',
    description: 'This project enables precise 3D scanning using fringe projection and MATLAB for surface analysis and measurement. Project rectangular periodic striped patterns onto 3D surfaces and capture images where the stripes appear distorted due to surface variations.'
  }
];

// Cycling Text Component
function CyclingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);
  
  const texts = [
    "bringing realities between digital and real worlds",
    "elevating spatial experience with AR/VR/MR interactions",
    "Crafting immersive experiences"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (textRef.current) {
        gsap.to(textRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.3,
          onComplete: () => {
            setCurrentIndex((prev) => (prev + 1) % texts.length);
            gsap.fromTo(textRef.current, 
              { opacity: 0, y: 10 },
              { opacity: 1, y: 0, duration: 0.3 }
            );
          }
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={textRef} className="text-[#A7A9B5] text-lg md:text-xl min-h-[1.5em]">
      {texts[currentIndex]}
    </div>
  );
}

// Project Detail Page
type ProjectType = typeof projects[0] | typeof experiments[0];

function ProjectDetail({ project, onBack }: { project: ProjectType; onBack: () => void }) {
  const isProject = 'demoLink' in project || 'isInProgress' in project;
  const proj = project as typeof projects[0];
  
  return (
    <div className="min-h-screen bg-[#05050B] text-[#F5F7FF]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] px-6 py-5 flex justify-between items-center bg-[#05050B]/80 backdrop-blur-sm">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#A7A9B5] hover:text-[#39FF14] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <div className="text-[#F5F7FF] font-semibold text-xl tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          BV
        </div>
      </nav>

      {/* Hero Image */}
      <div className="relative h-[60vh] mt-16">
        <img 
          src={(project as any).detailImage || (project as any).cardImage} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050B] via-[#05050B]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="px-[6vw] py-12 max-w-4xl mx-auto">
        {'company' in project && (
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#39FF14] mb-4">
            {proj.company}
            {proj.isInProgress && <span className="ml-2 px-2 py-1 bg-[#39FF14]/20 rounded text-[#39FF14]">In Progress</span>}
          </p>
        )}
        {'subtitle' in project && !('company' in project) && (
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#39FF14] mb-4">
            {project.subtitle}
          </p>
        )}
        <h1 className="text-[clamp(32px,4vw,48px)] font-bold text-[#F5F7FF] leading-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          {'fullTitle' in project ? proj.fullTitle : project.title}
        </h1>
        <p className="text-[#A7A9B5] text-xl mb-8">
          {project.description}
        </p>
        
        {/* Demo Link */}
        {isProject && proj.demoLink && (
          <a 
            href={proj.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#39FF14] text-[#05050B] rounded-xl font-semibold hover:bg-[#2dd911] transition-all mb-8"
          >
            <Youtube className="w-5 h-5" />
            Watch Demo
          </a>
        )}
        
        {'details' in project && (
          <div className="prose prose-invert max-w-none mt-8">
            {proj.details.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-[#A7A9B5] leading-relaxed mb-4 whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        )}
        {'description' in project && !('details' in project) && (
          <p className="text-[#A7A9B5] leading-relaxed">{project.description}</p>
        )}
      </div>
    </div>
  );
}

// Main Portfolio Component
function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const orbInnerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const pushingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bottomInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const heroTl = gsap.timeline({ delay: 0.3 });
      
      heroTl
        .fromTo(orbRef.current, 
          { scale: 0.65, rotation: -8, opacity: 0 },
          { scale: 1, rotation: 0, opacity: 1, duration: 1.1, ease: 'power3.out' }
        )
        .fromTo(headlineRef.current?.children || [], 
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: 'power2.out' },
          '-=0.7'
        )
        .fromTo(pushingRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo(ctaRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.2'
        )
        .fromTo(bottomInfoRef.current,
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.2'
        );

      // Orb continuous animation
      gsap.to(orbInnerRef.current, {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: 'none'
      });

      // Orb pulse animation
      gsap.to(orbRef.current, {
        scale: 1.02,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Hero scroll animation (exit only)
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          
          if (progress > 0.7) {
            const exitProgress = (progress - 0.7) / 0.3;
            
            gsap.set(headlineRef.current, {
              y: -22 * exitProgress + 'vh',
              opacity: 1 - exitProgress * 0.75
            });
            
            gsap.set(orbRef.current, {
              scale: 1 - 0.28 * exitProgress,
              rotation: 18 * exitProgress,
              x: -18 * exitProgress + 'vw',
              opacity: 1 - exitProgress * 0.65
            });
            
            gsap.set(pushingRef.current, {
              y: -10 * exitProgress + 'vh',
              opacity: 1 - exitProgress * 0.8
            });
            
            gsap.set(ctaRef.current, {
              y: -10 * exitProgress + 'vh',
              opacity: 1 - exitProgress * 0.8
            });
            
            gsap.set(bottomInfoRef.current, {
              y: 6 * exitProgress + 'vh',
              opacity: 1 - exitProgress
            });
          }
        },
        onLeaveBack: () => {
          gsap.set(headlineRef.current, { y: 0, opacity: 1 });
          gsap.set(orbRef.current, { scale: 1, rotation: 0, x: 0, opacity: 1 });
          gsap.set(pushingRef.current, { y: 0, opacity: 1 });
          gsap.set(ctaRef.current, { y: 0, opacity: 1 });
          gsap.set(bottomInfoRef.current, { y: 0, opacity: 1 });
        }
      });

      // Section 2: Selected Work - Row 1 (4 projects)
      const section2 = document.getElementById('section-2');
      if (section2) {
        const cards = section2.querySelectorAll('.project-card');
        const label = section2.querySelector('.section-label');
        const dot = section2.querySelector('.accent-dot');
        
        ScrollTrigger.create({
          trigger: section2,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onUpdate: (self) => {
            const progress = self.progress;
            
            if (progress <= 0.3) {
              const enterProgress = progress / 0.3;
              
              gsap.set(label, { y: -10 * (1 - enterProgress) + 'vh', opacity: enterProgress });
              gsap.set(dot, { y: -10 * (1 - enterProgress) + 'vh', opacity: enterProgress });
              
              cards.forEach((card, i) => {
                const direction = i % 2 === 0 ? -1 : 1;
                gsap.set(card, { 
                  x: direction * 50 * (1 - Math.min(enterProgress * (1.1 + i * 0.05), 1)) + 'vw',
                  opacity: Math.min(enterProgress * (1.1 + i * 0.05), 1)
                });
              });
            }
            else if (progress > 0.7) {
              const exitProgress = (progress - 0.7) / 0.3;
              
              cards.forEach((card, i) => {
                const direction = i % 2 === 0 ? -1 : 1;
                gsap.set(card, { 
                  x: direction * 10 * exitProgress + 'vw', 
                  opacity: 1 - exitProgress * 0.65 
                });
              });
              gsap.set([label, dot], { opacity: 1 - exitProgress });
            }
            else {
              gsap.set(label, { y: 0, opacity: 1 });
              gsap.set(dot, { y: 0, opacity: 1 });
              cards.forEach((card) => {
                gsap.set(card, { x: 0, opacity: 1 });
              });
            }
          }
        });
      }

      // Section 3: Selected Work - Row 2 (4 projects)
      const section3 = document.getElementById('section-3');
      if (section3) {
        const cards = section3.querySelectorAll('.project-card');
        const label = section3.querySelector('.section-label');
        const dot = section3.querySelector('.accent-dot');
        
        ScrollTrigger.create({
          trigger: section3,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onUpdate: (self) => {
            const progress = self.progress;
            
            if (progress <= 0.3) {
              const enterProgress = progress / 0.3;
              
              gsap.set([label, dot], { y: -10 * (1 - enterProgress) + 'vh', opacity: enterProgress });
              cards.forEach((card, i) => {
                gsap.set(card, { 
                  y: 60 * (1 - Math.min(enterProgress * (1.1 + i * 0.05), 1)) + 'vh',
                  opacity: Math.min(enterProgress * (1.1 + i * 0.05), 1)
                });
              });
            }
            else if (progress > 0.7) {
              const exitProgress = (progress - 0.7) / 0.3;
              
              cards.forEach((card) => {
                gsap.set(card, { 
                  y: -15 * exitProgress + 'vh', 
                  opacity: 1 - exitProgress * 0.65 
                });
              });
              gsap.set([label, dot], { opacity: 1 - exitProgress });
            }
            else {
              gsap.set([label, dot], { y: 0, opacity: 1 });
              cards.forEach((card) => {
                gsap.set(card, { y: 0, opacity: 1 });
              });
            }
          }
        });
      }

      // Section 4: Experiments
      const section4 = document.getElementById('section-4');
      if (section4) {
        const cards = section4.querySelectorAll('.experiment-card');
        const label = section4.querySelector('.section-label');
        const dot = section4.querySelector('.accent-dot');
        
        ScrollTrigger.create({
          trigger: section4,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onUpdate: (self) => {
            const progress = self.progress;
            
            if (progress <= 0.3) {
              const enterProgress = progress / 0.3;
              
              gsap.set([label, dot], { y: -10 * (1 - enterProgress) + 'vh', opacity: enterProgress });
              gsap.set(cards[0], { 
                x: -50 * (1 - Math.min(enterProgress * 1.2, 1)) + 'vw',
                opacity: Math.min(enterProgress * 1.2, 1)
              });
              gsap.set(cards[1], { 
                y: 60 * (1 - Math.min(enterProgress * 1.1, 1)) + 'vh',
                opacity: Math.min(enterProgress * 1.1, 1)
              });
              gsap.set(cards[2], { 
                x: 50 * (1 - Math.min(enterProgress * 1.2, 1)) + 'vw',
                opacity: Math.min(enterProgress * 1.2, 1)
              });
            }
            else if (progress > 0.7) {
              const exitProgress = (progress - 0.7) / 0.3;
              
              gsap.set(cards[0], { x: -15 * exitProgress + 'vw', opacity: 1 - exitProgress * 0.65 });
              gsap.set(cards[1], { y: -15 * exitProgress + 'vh', opacity: 1 - exitProgress * 0.65 });
              gsap.set(cards[2], { x: 15 * exitProgress + 'vw', opacity: 1 - exitProgress * 0.65 });
              gsap.set([label, dot], { opacity: 1 - exitProgress });
            }
            else {
              gsap.set([label, dot], { y: 0, opacity: 1 });
              gsap.set(cards[0], { x: 0, opacity: 1 });
              gsap.set(cards[1], { y: 0, opacity: 1 });
              gsap.set(cards[2], { x: 0, opacity: 1 });
            }
          }
        });
      }

      // Flowing sections animation
      const flowingSections = document.querySelectorAll('.flowing-section');
      flowingSections.forEach((section) => {
        const elements = section.querySelectorAll('.animate-in');
        
        elements.forEach((el) => {
          gsap.fromTo(el,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });
      });

    }, document.body);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <div className="relative bg-[#05050B] min-h-screen noise-overlay">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] px-6 py-5 flex justify-between items-center bg-[#05050B]/50 backdrop-blur-sm">
        <div className="text-[#F5F7FF] font-semibold text-xl tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          BV
        </div>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('section-2')} 
            className="text-[#A7A9B5] hover:text-[#39FF14] transition-colors text-sm font-medium"
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection('section-about')} 
            className="text-[#A7A9B5] hover:text-[#39FF14] transition-colors text-sm font-medium"
          >
            About
          </button>
          <a 
            href="https://drive.google.com/file/d/1AKljxQAvzUIbi-hIf-uuCEOrqdmkGyrH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A7A9B5] hover:text-[#39FF14] transition-colors text-sm font-medium"
          >
            Resume
          </a>
          <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14]" />
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section 
        ref={heroRef}
        className="relative w-full h-screen overflow-hidden z-[100]"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-[#0a0a1a] via-[#05050B] to-[#05050B]" />
          <div className="absolute inset-0 opacity-40">
            <img 
              src="/hero_orb.jpg" 
              alt="" 
              className="w-full h-full object-cover scale-125"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#05050B]/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center vignette">
          {/* Animated Orb */}
          <div 
            ref={orbRef}
            className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[clamp(300px,42vw,600px)] h-[clamp(300px,42vw,600px)]"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_30px_rgba(57,255,20,0.25),0_0_60px_rgba(57,255,20,0.1)]">
              <div ref={orbInnerRef} className="w-full h-full">
                <img 
                  src="/hero_orb.jpg" 
                  alt="XR Orb" 
                  className="w-full h-full object-cover scale-150"
                />
              </div>
            </div>
            {/* Orb glow rings */}
            <div className="absolute inset-[-20px] rounded-full border border-[#39FF14]/20 animate-pulse" />
            <div className="absolute inset-[-40px] rounded-full border border-[#39FF14]/10" />
          </div>

          {/* Headline - Positioned lower */}
          <div 
            ref={headlineRef}
            className="absolute left-1/2 top-[18%] -translate-x-1/2 text-center z-20"
          >
            <h1 className="text-[clamp(36px,5.5vw,68px)] font-bold text-[#F5F7FF] leading-[0.95] drop-shadow-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Real-time XR &
            </h1>
            <h1 className="text-[clamp(36px,5.5vw,68px)] font-bold text-[#F5F7FF] leading-[0.95] mt-2 drop-shadow-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Simulation Engineer
            </h1>
          </div>

          {/* Pushing Boundaries with Cycling Text - More spacing */}
          <div 
            ref={pushingRef}
            className="absolute left-1/2 top-[38%] -translate-x-1/2 text-center z-20"
          >
            <p className="text-[#39FF14] font-bold text-2xl md:text-3xl mb-3 drop-shadow-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Pushing Boundaries
            </p>
            <CyclingText />
          </div>

          {/* CTA Buttons - Stacked vertically with more spacing */}
          <div 
            ref={ctaRef}
            className="absolute left-1/2 top-[58%] -translate-x-1/2 flex flex-col items-center gap-6 z-20"
          >
            <Button 
              onClick={() => scrollToSection('section-2')}
              className="bg-[#39FF14] text-[#05050B] hover:bg-[#2dd911] font-semibold px-10 py-6 rounded-xl transition-all hover:scale-105 text-lg shadow-[0_0_20px_rgba(57,255,20,0.4)]"
            >
              View Work
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
            <Button 
              onClick={() => scrollToSection('section-contact')}
              variant="outline"
              className="border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-[#05050B] font-medium px-6 py-3 rounded-xl transition-all text-sm"
            >
              Get in Touch
            </Button>
          </div>

          {/* Bottom Info */}
          <div 
            ref={bottomInfoRef}
            className="absolute bottom-[8vh] left-0 right-0 px-[6vw] flex justify-between items-end z-20"
          >
            <div className="text-[#A7A9B5] text-sm">
              <span className="font-mono text-xs uppercase tracking-widest text-[#39FF14]">Previously</span>
              <p className="mt-1 font-medium text-[#F5F7FF]">@ BMW Group</p>
            </div>
            <div className="flex items-center gap-5">
              <a href="mailto:balajivelu3097@gmail.com" className="text-[#A7A9B5] hover:text-[#39FF14] transition-colors hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/balaji-velu/" target="_blank" rel="noopener noreferrer" className="text-[#A7A9B5] hover:text-[#39FF14] transition-colors hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/BalajiVelu" target="_blank" rel="noopener noreferrer" className="text-[#A7A9B5] hover:text-[#39FF14] transition-colors hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Selected Work - Row 1 (4 projects) */}
      <section 
        id="section-2"
        className="relative w-full h-screen overflow-hidden z-[200] bg-[#05050B]"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] to-[#05050B]" />
        </div>

        <div className="relative z-10 w-full h-full px-[6vw] py-[10vh]">
          <div className="section-label absolute left-[6vw] top-[10vh]">
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#A7A9B5]">
              Selected Work
            </span>
          </div>
          <div className="accent-dot absolute right-[6vw] top-[10vh] w-1.5 h-1.5 rounded-full bg-[#39FF14]" />

          <div className="absolute left-[6vw] top-[26vh] w-[88vw] h-[48vh] grid grid-cols-4 gap-[1.5vw]">
            {projects.slice(0, 4).map((project) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="project-card h-full rounded-xl overflow-hidden relative group cursor-pointer border border-white/[0.06] shadow-[0_18px_50px_rgba(0,0,0,0.55)] hover:border-[#39FF14]/40 transition-all duration-300 hover:-translate-y-2"
              >
                <img 
                  src={project.cardImage} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050B]/95 via-[#05050B]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#39FF14] mb-2">
                    {project.company}
                  </p>
                  <h3 className="text-[#F5F7FF] font-semibold text-base leading-tight mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-[#A7A9B5] text-xs">
                    {project.subtitle}
                  </p>
                </div>
                {project.demoLink && (
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-[#39FF14]/20 p-1.5 rounded-full backdrop-blur-sm">
                      <Play className="w-4 h-4 text-[#39FF14]" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Selected Work - Row 2 (4 projects) */}
      <section 
        id="section-3"
        className="relative w-full h-screen overflow-hidden z-[300] bg-[#05050B]"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] to-[#05050B]" />
        </div>

        <div className="relative z-10 w-full h-full px-[6vw] py-[10vh]">
          <div className="section-label absolute left-[6vw] top-[10vh]">
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#A7A9B5]">
              Selected Work
            </span>
          </div>
          <div className="accent-dot absolute right-[6vw] top-[10vh] w-1.5 h-1.5 rounded-full bg-[#39FF14]" />

          <div className="absolute left-[6vw] top-[22vh] w-[88vw] h-[56vh] grid grid-cols-4 gap-[1.5vw]">
            {projects.slice(4, 8).map((project) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="project-card h-full rounded-xl overflow-hidden relative group cursor-pointer border border-white/[0.06] shadow-[0_18px_50px_rgba(0,0,0,0.55)] hover:border-[#39FF14]/40 transition-all duration-300 hover:-translate-y-2"
              >
                <img 
                  src={project.cardImage} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050B]/95 via-[#05050B]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#39FF14] mb-2">
                    {project.company}
                    {project.isInProgress && <span className="ml-2 text-[10px]">(In Progress)</span>}
                  </p>
                  <h3 className="text-[#F5F7FF] font-semibold text-base leading-tight mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-[#A7A9B5] text-xs">
                    {project.subtitle}
                  </p>
                </div>
                {project.demoLink && (
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-[#39FF14]/20 p-1.5 rounded-full backdrop-blur-sm">
                      <Play className="w-4 h-4 text-[#39FF14]" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Experiments & Explorations */}
      <section 
        id="section-4"
        className="relative w-full h-screen overflow-hidden z-[400] bg-[#05050B]"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] to-[#05050B]" />
        </div>

        <div className="relative z-10 w-full h-full px-[6vw] py-[10vh]">
          <div className="section-label absolute left-[6vw] top-[10vh]">
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#A7A9B5]">
              Experiments & Explorations
            </span>
          </div>
          <div className="accent-dot absolute right-[6vw] top-[10vh] w-1.5 h-1.5 rounded-full bg-[#39FF14]" />

          <div className="absolute left-[6vw] top-[22vh] w-[88vw] h-[56vh] flex gap-[2.2vw]">
            {experiments.map((exp) => (
              <div 
                key={exp.id}
                onClick={() => setSelectedProject(exp)}
                className="experiment-card flex-1 h-full rounded-xl overflow-hidden relative group cursor-pointer border border-white/[0.06] shadow-[0_18px_50px_rgba(0,0,0,0.55)] hover:border-[#39FF14]/40 transition-all duration-300 hover:-translate-y-2"
              >
                <img 
                  src={exp.cardImage} 
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050B]/95 via-[#05050B]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#39FF14] mb-2">
                    {exp.subtitle}
                  </p>
                  <h3 className="text-[#F5F7FF] font-semibold text-lg leading-tight mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {exp.title}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-[#39FF14]/20 p-2 rounded-full backdrop-blur-sm">
                    <ExternalLink className="w-5 h-5 text-[#39FF14]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: About */}
      <section 
        id="section-about"
        className="relative w-full min-h-screen z-[500] bg-[#05050B] flowing-section py-[12vh]"
      >
        <div className="px-[6vw] max-w-6xl mx-auto">
          {/* About Title */}
          <div className="mb-12 animate-in">
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#39FF14]">Get to know me</span>
            <h2 className="text-[clamp(40px,5vw,64px)] font-bold text-[#F5F7FF] leading-[0.95] mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              About
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Profile Image & Quick Info */}
            <div className="animate-in">
              <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-xl overflow-hidden mb-8 border border-white/10">
                <img 
                  src="/profile.jpg" 
                  alt="Balaji Velu"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* What I Do */}
              <div className="space-y-4">
                <h3 className="text-[#F5F7FF] font-semibold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>What I Do</h3>
                <div className="space-y-2">
                  <p className="text-[#A7A9B5] text-sm">
                    <span className="text-[#39FF14]">Design:</span> 3D, XR, UX, Spatial, AR / MR Frameworks
                  </p>
                  <p className="text-[#A7A9B5] text-sm">
                    <span className="text-[#39FF14]">Development:</span> Products, Strategies, Prototyping, Systems Thinking
                  </p>
                  <p className="text-[#A7A9B5] text-sm">
                    <span className="text-[#39FF14]">Work Style:</span> Independent & Cross-Functional | Team Building & Leadership
                  </p>
                </div>
              </div>

              {/* A Few More Snippets */}
              <div className="mt-8 space-y-4">
                <h3 className="text-[#F5F7FF] font-semibold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>A Few More Snippets</h3>
                <div className="space-y-2">
                  <p className="text-[#A7A9B5] text-sm">
                    <span className="text-[#39FF14]">Superpowers:</span> Initiative | Adaptable | Persistence | Optimism
                  </p>
                  <p className="text-[#A7A9B5] text-sm">
                    <span className="text-[#39FF14]">Identity:</span> Indian | Aries | Stoic | Spiritual
                  </p>
                </div>
              </div>

              {/* Beyond Work */}
              <div className="mt-8 space-y-4">
                <h3 className="text-[#F5F7FF] font-semibold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Beyond Work</h3>
                <p className="text-[#A7A9B5] text-sm">
                  <span className="text-[#39FF14]">Hobbies:</span> 🏑 | 📖 | 🌊 | 🏔️ | 🍳 | 🎸
                </p>
              </div>
            </div>

            {/* Right Column - About Text */}
            <div className="animate-in">
              <h2 className="text-[clamp(24px,2.5vw,32px)] font-bold text-[#F5F7FF] leading-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Balaji Velu – Bridging Realities with XR
              </h2>
              
              <p className="text-[#A7A9B5] leading-relaxed mb-6">
                Welcome to my corner of the internet!
              </p>
              
              <p className="text-[#A7A9B5] leading-relaxed mb-6">
                I'm Bala, an XR Developer crafting immersive experiences at the intersection of technology, 
                design, and human interaction. From prototyping to scalable product deployment, I thrive on 
                solving complex problems, optimizing workflows, and crafting high-performance XR applications 
                that push the boundaries of digital interaction. With a deep understanding of software, hardware, 
                and environmental constraints, I specialize in developing frameworks and strategies that bridge 
                the gap between theory and practice. Whether it's enhancing user experiences, refining spatial 
                interactions, or tackling technical challenges, my approach is always rooted in collaboration, 
                creativity, and thoughtful design.
              </p>

              <h3 className="text-[#F5F7FF] font-semibold text-xl mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Beyond the Code</h3>
              
              <p className="text-[#A7A9B5] leading-relaxed mb-6">
                Having worked with architects, designers, engineers, and planners, I bring a proactive 
                problem-solving mindset, strong communication skills, and an interdisciplinary perspective 
                to every project. I find inspiration in listening to people, sharing their passions, and 
                working in fast-paced, innovative environments that encourage learning and growth. Sports 
                have played a major role in shaping my discipline, resilience, and teamwork, qualities that 
                translate effectively into my professional life.
              </p>

              <h3 className="text-[#F5F7FF] font-semibold text-xl mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>What I'm Exploring Now</h3>
              
              <p className="text-[#A7A9B5] leading-relaxed mb-6">
                Currently, I'm working on Digital Humans and Generative AI for XR as a side project while 
                actively looking for a challenging role where I can contribute my strategic and creative 
                skills to a dynamic team.
              </p>

              <p className="text-[#F5F7FF] font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Curious? Feedback? Collaboration?
              </p>
              <p className="text-[#A7A9B5] mt-2">
                Feel free to grab a virtual coffee with me !! Let's Connect via{' '}
                <a href="mailto:balajivelu3097@gmail.com" className="text-[#39FF14] hover:underline">
                  Email
                </a>{' '}
                or{' '}
                <a href="https://www.linkedin.com/in/balaji-velu/" target="_blank" rel="noopener noreferrer" className="text-[#39FF14] hover:underline">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Contact / Footer */}
      <section 
        id="section-contact"
        className="relative w-full min-h-screen z-[600] bg-[#0B0B10] flowing-section py-[12vh]"
      >
        <div className="px-[6vw] max-w-4xl mx-auto text-center">
          <div className="animate-in mb-8">
            <Sparkles className="w-12 h-12 text-[#39FF14] mx-auto mb-6" />
          </div>
          
          <h2 className="animate-in text-[clamp(40px,5vw,64px)] font-bold text-[#F5F7FF] leading-[0.95]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Let's build the next reality.
          </h2>
          
          <p className="animate-in mt-6 text-[#A7A9B5] text-lg">
            Open to collaborations, speaking, and product roles.
          </p>

          <div className="animate-in mt-10">
            <a 
              href="mailto:balajivelu3097@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#39FF14] text-[#39FF14] rounded-xl font-semibold hover:bg-[#39FF14] hover:text-[#05050B] transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              balajivelu3097@gmail.com
            </a>
          </div>

          <div className="animate-in mt-12 flex items-center justify-center gap-8">
            <a 
              href="https://www.linkedin.com/in/balaji-velu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#A7A9B5] hover:text-[#39FF14] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/BalajiVelu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#A7A9B5] hover:text-[#39FF14] transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://drive.google.com/uc?export=download&id=19W2_606QvhIKcbC5m5nZPwPt_gYJCH6u?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#A7A9B5] hover:text-[#39FF14] transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Skills */}
          <div className="animate-in mt-16 pt-10 border-t border-white/10">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-[#A7A9B5] text-sm">
                <Box className="w-4 h-4 text-[#39FF14]" />
                <span>Unity 3D</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-[#A7A9B5] text-sm">
                <Layers className="w-4 h-4 text-[#39FF14]" />
                <span>Unreal Engine</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-[#A7A9B5] text-sm">
                <Cpu className="w-4 h-4 text-[#39FF14]" />
                <span>HoloLens 2</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-[#A7A9B5] text-sm">
                <Sparkles className="w-4 h-4 text-[#39FF14]" />
                <span>Meta Quest</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-[#A7A9B5] text-sm">
              © Balaji Velu — 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return <Portfolio />;
}

export default App;
