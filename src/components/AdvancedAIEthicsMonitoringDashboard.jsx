import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Shield, AlertTriangle, TrendingUp, Users, Brain, Eye, 
  Target, Zap, BarChart3, Activity, Settings, Download,
  Globe, Cpu, Heart, Scale, CheckCircle, XCircle,
  Calendar, Clock, Database, Layers, Sparkles, Star,
  Search, Filter, Bell, ChevronDown, ChevronRight,
  AlertCircle, TrendingDown, GitBranch, Microscope,
  LineChart, PieChart, Radar, Map, Grid, Lock,
  FileText, Send, MessageSquare, ArrowUpRight,
  Briefcase, Award, Flag, Gavel, Building2
} from 'lucide-react';

const AdvancedAIEthicsMonitoringDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedModel, setSelectedModel] = useState('all');
  const [alertLevel, setAlertLevel] = useState('medium');
  const [realTimeData, setRealTimeData] = useState({});
  const [selectedMetric, setSelectedMetric] = useState('bias');
  const [timeRange, setTimeRange] = useState('24h');
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [expandedModels, setExpandedModels] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [showPredictiveAnalysis, setShowPredictiveAnalysis] = useState(false);
  const [notifications, setNotifications] = useState([]);
  
  const canvasRef = useRef(null);
  const particlesRef = useRef(null);
  const networkGraphRef = useRef(null);
  const heatmapRef = useRef(null);

  // Generate historical data for trends
  function generateHistoricalData(days) {
    return Array.from({ length: days }, (_, i) => ({
      date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      biasScore: Math.random() * 0.3 + 0.05,
      fairnessIndex: Math.random() * 20 + 75,
      predictions: Math.floor(Math.random() * 1000) + 500,
      alerts: Math.floor(Math.random() * 5),
      confidence: Math.random() * 10 + 85
    }));
  }

  // Enhanced AI Models with comprehensive metrics
  const aiModels = [
    {
      id: 'gpt-4-healthcare',
      name: 'GPT-4 Healthcare',
      provider: 'OpenAI',
      version: '4.0.2',
      deployment: 'Production',
      status: 'active',
      riskLevel: 'medium',
      biasScore: 0.12,
      fairnessIndex: 87.3,
      predictions: 24567,
      alerts: 2,
      uptime: 99.7,
      latency: 145,
      confidence: 94.2,
      explainabilityScore: 78.5,
      robustnessScore: 82.1,
      auditStatus: 'compliant',
      lastAudit: '2025-07-01',
      dataSourceBias: 0.08,
      algorithmicTransparency: 85.3,
      stakeholderTrust: 79.2,
      regulatoryCompliance: {
        gdpr: 96.5,
        hipaa: 94.2,
        ccpa: 89.7,
        eu_ai_act: 87.3
      },
      demographics: {
        racial: { score: 0.08, trend: 'improving', samples: 12847, confidence: 0.95 },
        gender: { score: 0.15, trend: 'stable', samples: 15623, confidence: 0.93 },
        age: { score: 0.18, trend: 'concerning', samples: 9876, confidence: 0.91 },
        socioeconomic: { score: 0.09, trend: 'improving', samples: 8934, confidence: 0.89 }
      },
      performanceMetrics: {
        precision: 0.924,
        recall: 0.887,
        f1Score: 0.905,
        auc: 0.943,
        calibration: 0.089
      },
      historicalTrends: generateHistoricalData(30),
      color: '#10B981',
      deploymentRegions: ['US-East', 'EU-West', 'Asia-Pacific'],
      criticality: 'high'
    },
    {
      id: 'claude-diagnostic',
      name: 'Claude Diagnostic',
      provider: 'Anthropic',
      version: '3.5',
      deployment: 'Production',
      status: 'active',
      riskLevel: 'low',
      biasScore: 0.07,
      fairnessIndex: 92.1,
      predictions: 18432,
      alerts: 0,
      uptime: 99.9,
      latency: 98,
      confidence: 96.8,
      explainabilityScore: 91.2,
      robustnessScore: 88.7,
      auditStatus: 'exemplary',
      lastAudit: '2025-06-28',
      dataSourceBias: 0.04,
      algorithmicTransparency: 93.7,
      stakeholderTrust: 87.9,
      regulatoryCompliance: {
        gdpr: 98.2,
        hipaa: 97.1,
        ccpa: 94.8,
        eu_ai_act: 92.6
      },
      demographics: {
        racial: { score: 0.05, trend: 'excellent', samples: 15234, confidence: 0.97 },
        gender: { score: 0.08, trend: 'improving', samples: 14987, confidence: 0.96 },
        age: { score: 0.12, trend: 'stable', samples: 11456, confidence: 0.94 },
        socioeconomic: { score: 0.06, trend: 'excellent', samples: 10789, confidence: 0.92 }
      },
      performanceMetrics: {
        precision: 0.967,
        recall: 0.934,
        f1Score: 0.950,
        auc: 0.978,
        calibration: 0.045
      },
      historicalTrends: generateHistoricalData(30),
      color: '#3B82F6',
      deploymentRegions: ['US-East', 'US-West', 'EU-Central'],
      criticality: 'high'
    },
    {
      id: 'gemini-radiology',
      name: 'Gemini Radiology',
      provider: 'Google',
      version: '2.1',
      deployment: 'Production',
      status: 'active',
      riskLevel: 'high',
      biasScore: 0.16,
      fairnessIndex: 78.9,
      predictions: 31245,
      alerts: 5,
      uptime: 98.2,
      latency: 203,
      confidence: 89.4,
      explainabilityScore: 72.8,
      robustnessScore: 76.3,
      auditStatus: 'needs_review',
      lastAudit: '2025-06-15',
      dataSourceBias: 0.13,
      algorithmicTransparency: 71.2,
      stakeholderTrust: 68.5,
      regulatoryCompliance: {
        gdpr: 87.3,
        hipaa: 91.2,
        ccpa: 82.7,
        eu_ai_act: 76.4
      },
      demographics: {
        racial: { score: 0.22, trend: 'critical', samples: 18765, confidence: 0.98 },
        gender: { score: 0.14, trend: 'stable', samples: 17234, confidence: 0.95 },
        age: { score: 0.11, trend: 'improving', samples: 16789, confidence: 0.93 },
        socioeconomic: { score: 0.19, trend: 'concerning', samples: 15234, confidence: 0.91 }
      },
      performanceMetrics: {
        precision: 0.856,
        recall: 0.823,
        f1Score: 0.839,
        auc: 0.887,
        calibration: 0.156
      },
      historicalTrends: generateHistoricalData(30),
      color: '#F59E0B',
      deploymentRegions: ['US-Central', 'EU-South', 'Asia-Pacific'],
      criticality: 'critical'
    },
    {
      id: 'watson-oncology',
      name: 'Watson Oncology',
      provider: 'IBM',
      version: '1.8',
      deployment: 'Production',
      status: 'warning',
      riskLevel: 'critical',
      biasScore: 0.28,
      fairnessIndex: 64.7,
      predictions: 12890,
      alerts: 12,
      uptime: 96.8,
      latency: 287,
      confidence: 82.3,
      explainabilityScore: 65.2,
      robustnessScore: 68.9,
      auditStatus: 'non_compliant',
      lastAudit: '2025-05-20',
      dataSourceBias: 0.24,
      algorithmicTransparency: 62.1,
      stakeholderTrust: 54.3,
      regulatoryCompliance: {
        gdpr: 76.2,
        hipaa: 84.7,
        ccpa: 71.8,
        eu_ai_act: 63.5
      },
      demographics: {
        racial: { score: 0.31, trend: 'critical', samples: 8934, confidence: 0.89 },
        gender: { score: 0.25, trend: 'critical', samples: 9876, confidence: 0.87 },
        age: { score: 0.29, trend: 'critical', samples: 7456, confidence: 0.85 },
        socioeconomic: { score: 0.27, trend: 'critical', samples: 6789, confidence: 0.83 }
      },
      performanceMetrics: {
        precision: 0.768,
        recall: 0.734,
        f1Score: 0.751,
        auc: 0.812,
        calibration: 0.234
      },
      historicalTrends: generateHistoricalData(30),
      color: '#EF4444',
      deploymentRegions: ['US-East'],
      criticality: 'critical'
    }
  ];

  // Enhanced Ethics metrics with predictive analytics
  const ethicsMetrics = {
    overallFairnessScore: 83.2,
    activeBiasAlerts: 19,
    modelsMonitored: 4,
    predictionsAnalyzed: 87134,
    demographicParity: 0.156,
    equalizedOdds: 0.142,
    calibrationError: 0.089,
    disparateImpact: 0.203,
    congressionalCompliance: 91.7,
    predictedRiskScore: 7.3,
    ethicalDriftDetection: 'stable',
    stakeholderConfidence: 76.8,
    transparencyIndex: 82.4,
    accountabilityScore: 78.9,
    explainabilityGap: 12.7,
    auditCoverage: 94.2,
    incidentResponse: 87.6,
    ethicalGovernance: 89.3
  };

  // Advanced alerts system
  const alerts = [
    {
      id: 1,
      type: 'critical',
      model: 'Watson Oncology',
      category: 'Bias Detection',
      title: 'Critical Racial Bias Detected',
      description: 'Systematic bias against African American patients in treatment recommendations',
      timestamp: '2025-07-09T10:30:00Z',
      severity: 'critical',
      impact: 'high',
      affectedSamples: 2847,
      confidenceLevel: 0.97,
      legalRisk: 'high',
      actionRequired: 'immediate',
      estimatedCost: '$2.4M',
      regulatoryImplications: ['Title VII', 'Civil Rights Act'],
      stakeholders: ['Legal Team', 'Ethics Committee', 'Clinical Staff']
    },
    {
      id: 2,
      type: 'warning',
      model: 'Gemini Radiology',
      category: 'Performance Degradation',
      title: 'Age-Related Diagnostic Disparity',
      description: 'Decreased accuracy for patients over 65 in lung cancer detection',
      timestamp: '2025-07-09T09:15:00Z',
      severity: 'high',
      impact: 'medium',
      affectedSamples: 1234,
      confidenceLevel: 0.91,
      legalRisk: 'medium',
      actionRequired: 'within_24h',
      estimatedCost: '$850K',
      regulatoryImplications: ['Age Discrimination Act'],
      stakeholders: ['Clinical Team', 'Quality Assurance']
    },
    {
      id: 3,
      type: 'info',
      model: 'GPT-4 Healthcare',
      category: 'Compliance Update',
      title: 'GDPR Compliance Score Improved',
      description: 'Data privacy metrics show 2.3% improvement over last quarter',
      timestamp: '2025-07-09T08:00:00Z',
      severity: 'low',
      impact: 'low',
      affectedSamples: 0,
      confidenceLevel: 0.88,
      legalRisk: 'low',
      actionRequired: 'monitor',
      estimatedCost: '$0',
      regulatoryImplications: ['GDPR'],
      stakeholders: ['Compliance Team']
    }
  ];

  // Simulate real-time updates with WebSocket-like behavior
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        ...prev,
        timestamp: new Date(),
        newPredictions: Math.floor(Math.random() * 50) + 100,
        biasDetections: Math.floor(Math.random() * 3),
        fairnessScore: (Math.random() * 10 + 80).toFixed(1),
        anomaliesDetected: Math.floor(Math.random() * 2),
        ethicalRiskScore: (Math.random() * 3 + 5).toFixed(1),
        complianceStatus: Math.random() > 0.1 ? 'compliant' : 'warning'
      }));

      // Simulate new notifications
      if (Math.random() > 0.95) {
        setNotifications(prev => [...prev.slice(-4), {
          id: Date.now(),
          type: ['info', 'warning', 'critical'][Math.floor(Math.random() * 3)],
          message: 'New bias pattern detected in model predictions',
          timestamp: new Date()
        }]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Advanced animated network visualization
  useEffect(() => {
    const canvas = networkGraphRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width = 600;
    const height = canvas.height = 400;

    const nodes = aiModels.map((model, i) => ({
      id: model.id,
      x: (width / (aiModels.length + 1)) * (i + 1),
      y: height / 2,
      radius: 20 + model.fairnessIndex / 5,
      color: model.color,
      name: model.name,
      risk: model.riskLevel,
      vx: 0,
      vy: 0
    }));

    const connections = [
      { source: 0, target: 1, strength: 0.8 },
      { source: 1, target: 2, strength: 0.6 },
      { source: 2, target: 3, strength: 0.4 },
      { source: 0, target: 3, strength: 0.3 }
    ];

    let animationFrame;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      // Draw connections
      connections.forEach(conn => {
        const source = nodes[conn.source];
        const target = nodes[conn.target];
        
        ctx.strokeStyle = `rgba(255, 255, 255, ${conn.strength * 0.3})`;
        ctx.lineWidth = conn.strength * 3;
        ctx.beginPath();
        ctx.moveTo(source.x, source.y);
        ctx.lineTo(target.x, target.y);
        ctx.stroke();

        // Animated data flow
        const t = (time * 2 + conn.source) % 1;
        const x = source.x + (target.x - source.x) * t;
        const y = source.y + (target.y - source.y) * t;
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#60A5FA';
        ctx.fill();
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        // Pulsing effect based on activity
        const pulse = 1 + Math.sin(time * 3 + i) * 0.1;
        const currentRadius = node.radius * pulse;

        // Risk indicator ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius + 5, 0, Math.PI * 2);
        ctx.strokeStyle = node.risk === 'critical' ? '#EF4444' : 
                         node.risk === 'high' ? '#F59E0B' : 
                         node.risk === 'medium' ? '#10B981' : '#6B7280';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Main node
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Node label
        ctx.fillStyle = 'white';
        ctx.font = 'bold 10px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(node.name.split(' ')[0], node.x, node.y - currentRadius - 15);
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  // Advanced bias heatmap visualization
  useEffect(() => {
    const canvas = heatmapRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width = 500;
    const height = canvas.height = 300;

    const demographics = ['Racial', 'Gender', 'Age', 'Socioeconomic'];
    const cellWidth = width / aiModels.length;
    const cellHeight = height / demographics.length;

    let animationFrame;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      aiModels.forEach((model, i) => {
        demographics.forEach((demo, j) => {
          const demoKey = demo.toLowerCase();
          const score = model.demographics[demoKey]?.score || 0;
          
          const x = i * cellWidth;
          const y = j * cellHeight;
          
          // Heat intensity based on bias score
          const intensity = Math.min(1, score * 4);
          const pulse = 1 + Math.sin(time * 2 + i + j) * 0.1;
          
          // Color gradient from green (good) to red (bad)
          const red = Math.floor(255 * intensity * pulse);
          const green = Math.floor(255 * (1 - intensity) * pulse);
          const blue = 50;
          
          ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, 0.8)`;
          ctx.fillRect(x, y, cellWidth - 2, cellHeight - 2);
          
          // Score text
          ctx.fillStyle = 'white';
          ctx.font = 'bold 12px Inter';
          ctx.textAlign = 'center';
          ctx.fillText(score.toFixed(2), x + cellWidth/2, y + cellHeight/2);
        });
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  // Animated particles background
  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        color: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'][Math.floor(Math.random() * 4)]
      });
    }

    let animationFrame;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        // Connect nearby particles
        particles.forEach((other, j) => {
          if (i !== j) {
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - distance/100) * 0.1})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          }
        });

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(')', `, ${particle.opacity})`).replace('rgb', 'rgba');
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const getBiasColor = (score) => {
    if (score < 0.1) return 'text-green-400';
    if (score < 0.2) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'low': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'high': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'critical': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getRiskLevelColor = (level) => {
    switch (level) {
      case 'low': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'high': return 'bg-orange-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const generateAdvancedReport = () => {
    const reportData = {
      timestamp: new Date().toISOString(),
      executiveSummary: {
        overallRiskLevel: 'Medium-High',
        criticalIssues: 3,
        complianceStatus: 'Partial',
        recommendedActions: 5,
        estimatedFinancialImpact: '$3.2M'
      },
      detailedMetrics: ethicsMetrics,
      modelAnalysis: aiModels.map(model => ({
        ...model,
        riskAssessment: {
          biasRisk: model.biasScore > 0.2 ? 'High' : model.biasScore > 0.1 ? 'Medium' : 'Low',
          complianceRisk: model.fairnessIndex < 70 ? 'High' : model.fairnessIndex < 85 ? 'Medium' : 'Low',
          operationalRisk: model.alerts > 5 ? 'High' : model.alerts > 2 ? 'Medium' : 'Low'
        }
      })),
      alerts,
      predictiveAnalysis: {
        futureRiskTrends: 'Increasing bias risk in healthcare AI systems',
        recommendedInterventions: [
          'Immediate bias audit for Watson Oncology',
          'Enhanced demographic data collection',
          'Implementation of fairness constraints',
          'Regular stakeholder feedback collection'
        ],
        timeToCompliance: '6-8 months with immediate action'
      },
      regulatoryLandscape: {
        upcomingRegulations: ['EU AI Act enforcement', 'FDA AI/ML guidance updates'],
        complianceGaps: ['Algorithmic transparency', 'Bias documentation'],
        legalRisks: ['Discrimination lawsuits', 'Regulatory penalties']
      }
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `advanced-ai-ethics-report-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleModelExpansion = (modelId) => {
    setExpandedModels(prev => {
      const newSet = new Set(prev);
      if (newSet.has(modelId)) {
        newSet.delete(modelId);
      } else {
        newSet.add(modelId);
      }
      return newSet;
    });
  };

  const filteredModels = useMemo(() => {
    return aiModels.filter(model => 
      selectedModel === 'all' || model.id === selectedModel
    ).filter(model =>
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.provider.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [selectedModel, searchQuery]);

  const criticalAlerts = alerts.filter(alert => alert.severity === 'critical');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated Particles Background */}
      <canvas 
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Advanced Header with Real-time Metrics */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 shadow-2xl border-b-4 border-pink-400">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <Shield className="text-pink-300" size={56} />
                  <Heart className="absolute -top-2 -right-2 text-red-300" size={24} />
                  {criticalAlerts.length > 0 && (
                    <div className="absolute -bottom-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-pulse">
                      {criticalAlerts.length}
                    </div>
                  )}
                </div>
                <div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-pink-200 to-cyan-200 bg-clip-text text-transparent">
                    AI Ethics Command Center
                  </h1>
                  <p className="text-pink-100 mt-3 text-xl">Advanced bias detection, fairness enforcement & regulatory compliance</p>
                  <div className="flex items-center gap-6 mt-4">
                    <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-sm text-green-300">Live Monitoring Active</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-500/20 px-3 py-1 rounded-full">
                      <Database size={16} className="text-blue-300" />
                      <span className="text-sm text-blue-300">{ethicsMetrics.predictionsAnalyzed.toLocaleString()} Predictions Analyzed</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-right space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-pink-300">
                      {ethicsMetrics.overallFairnessScore}%
                    </div>
                    <div className="text-sm text-pink-200">Overall Fairness</div>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp size={12} className="text-green-400" />
                      <span className="text-xs text-green-400">+2.3% vs last week</span>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-red-300">
                      {ethicsMetrics.activeBiasAlerts}
                    </div>
                    <div className="text-sm text-red-200">Active Alerts</div>
                    <div className="flex items-center gap-1 mt-1">
                      <AlertTriangle size={12} className="text-red-400" />
                      <span className="text-xs text-red-400">{criticalAlerts.length} Critical</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-lg font-semibold text-purple-300 mb-2">Risk Assessment</div>
                  <div className="text-2xl font-bold text-orange-300">
                    {ethicsMetrics.predictedRiskScore}/10
                  </div>
                  <div className="text-sm text-orange-200">Predicted Ethical Risk</div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400"
                      style={{ width: `${ethicsMetrics.predictedRiskScore * 10}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Advanced Navigation with Search and Filters */}
          <div className="bg-gray-800/30 backdrop-blur-xl rounded-3xl shadow-2xl mb-8 border border-purple-500/30">
            <div className="p-6 border-b border-purple-500/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search models, alerts, metrics..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 w-80"
                    />
                  </div>
                  
                  <select 
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-purple-400"
                  >
                    <option value="all">All Models</option>
                    {aiModels.map(model => (
                      <option key={model.id} value={model.id}>{model.name}</option>
                    ))}
                  </select>

                  <select 
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value)}
                    className="bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-purple-400"
                  >
                    <option value="1h">Last Hour</option>
                    <option value="24h">Last 24 Hours</option>
                    <option value="7d">Last 7 Days</option>
                    <option value="30d">Last 30 Days</option>
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setShowPredictiveAnalysis(!showPredictiveAnalysis)}
                    className={`px-4 py-2 rounded-xl border transition-all ${
                      showPredictiveAnalysis 
                        ? 'bg-purple-500/20 text-purple-300 border-purple-500/50' 
                        : 'bg-gray-700/50 text-gray-300 border-gray-600'
                    }`}
                  >
                    <Microscope size={16} className="inline mr-2" />
                    Predictive Analysis
                  </button>
                  
                  <div className="relative">
                    <Bell size={20} className="text-yellow-400" />
                    {notifications.length > 0 && (
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        {notifications.length}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <nav className="flex space-x-8">
                {[
                  { id: 'overview', label: 'Executive Overview', icon: BarChart3 },
                  { id: 'realtime', label: 'Real-time Monitoring', icon: Activity },
                  { id: 'bias-analysis', label: 'Advanced Bias Analysis', icon: Target },
                  { id: 'compliance', label: 'Regulatory Compliance', icon: Scale },
                  { id: 'predictive', label: 'Predictive Analytics', icon: TrendingUp },
                  { id: 'governance', label: 'AI Governance', icon: Shield },
                  { id: 'congressional', label: 'Congressional Oversight', icon: Building2 }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex items-center gap-3 py-3 px-4 border-b-2 font-medium text-sm transition-all rounded-t-lg ${
                      activeTab === id
                        ? 'border-pink-400 text-pink-300 bg-pink-400/10'
                        : 'border-transparent text-gray-300 hover:text-white hover:border-gray-500 hover:bg-gray-700/30'
                    }`}
                  >
                    <Icon size={18} />
                    {label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Executive Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Critical Alerts Banner */}
              {criticalAlerts.length > 0 && (
                <div className="bg-red-500/10 border-2 border-red-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle size={24} className="text-red-400" />
                    <h3 className="text-xl font-bold text-red-300">Critical Alerts Requiring Immediate Attention</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {criticalAlerts.map(alert => (
                      <div key={alert.id} className="bg-red-500/20 rounded-xl p-4 border border-red-500/30">
                        <div className="font-semibold text-red-300">{alert.title}</div>
                        <div className="text-sm text-red-200 mt-1">{alert.model}</div>
                        <div className="text-xs text-gray-400 mt-2">Impact: {alert.estimatedCost}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Executive KPI Dashboard */}
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { 
                    label: 'Ethical Risk Score', 
                    value: `${ethicsMetrics.predictedRiskScore}/10`, 
                    icon: AlertCircle, 
                    color: 'red',
                    trend: '+0.3',
                    trendDirection: 'up'
                  },
                  { 
                    label: 'Compliance Rate', 
                    value: `${ethicsMetrics.congressionalCompliance}%`, 
                    icon: CheckCircle, 
                    color: 'green',
                    trend: '+2.1%',
                    trendDirection: 'up'
                  },
                  { 
                    label: 'Stakeholder Trust', 
                    value: `${ethicsMetrics.stakeholderConfidence}%`, 
                    icon: Users, 
                    color: 'blue',
                    trend: '-1.2%',
                    trendDirection: 'down'
                  },
                  { 
                    label: 'Transparency Index', 
                    value: `${ethicsMetrics.transparencyIndex}%`, 
                    icon: Eye, 
                    color: 'purple',
                    trend: '+0.8%',
                    trendDirection: 'up'
                  }
                ].map((metric, idx) => (
                  <div key={idx} className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 shadow-2xl hover:scale-105 transition-transform">
                    <div className="flex items-center justify-between mb-4">
                      <metric.icon size={24} className={`text-${metric.color}-400`} />
                      <div className={`flex items-center gap-1 text-xs ${
                        metric.trendDirection === 'up' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {metric.trendDirection === 'up' ? (
                          <TrendingUp size={12} />
                        ) : (
                          <TrendingDown size={12} />
                        )}
                        {metric.trend}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* AI Model Network Visualization */}
              <div className="bg-gray-800/30 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <GitBranch size={24} className="text-cyan-400" />
                  AI Model Ecosystem & Risk Analysis
                  <span className="text-sm text-gray-400 font-normal">Interactive network showing model relationships and risk levels</span>
                </h3>
                
                <canvas 
                  ref={networkGraphRef}
                  className="w-full h-96 rounded-2xl bg-gray-900/50 border border-purple-500/30"
                />
                
                <div className="mt-6 grid md:grid-cols-4 gap-4">
                  {aiModels.map(model => (
                    <div key={model.id} className="flex items-center gap-3 bg-gray-700/30 rounded-lg p-3">
                      <div className={`w-3 h-3 rounded-full ${getRiskLevelColor(model.riskLevel)}`} />
                      <div>
                        <div className="font-medium text-sm">{model.name}</div>
                        <div className="text-xs text-gray-400">{model.riskLevel} risk</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bias Heatmap */}
              <div className="bg-gray-800/30 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Grid size={24} className="text-orange-400" />
                  Demographic Bias Heatmap
                  <span className="text-sm text-gray-400 font-normal">Real-time bias scores across protected demographics</span>
                </h3>
                
                <div className="flex gap-8">
                  <canvas 
                    ref={heatmapRef}
                    className="rounded-2xl bg-gray-900/50 border border-purple-500/30"
                  />
                  
                  <div className="space-y-4">
                    <div className="text-sm font-semibold">Bias Score Legend</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-400 rounded" />
                        <span className="text-sm">0.00 - 0.10 (Excellent)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-yellow-400 rounded" />
                        <span className="text-sm">0.10 - 0.20 (Acceptable)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-orange-400 rounded" />
                        <span className="text-sm">0.20 - 0.30 (Concerning)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-400 rounded" />
                        <span className="text-sm">0.30+ (Critical)</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-2">
                      <div className="text-sm font-semibold">Demographics</div>
                      {['Racial', 'Gender', 'Age', 'Socioeconomic'].map((demo, i) => (
                        <div key={demo} className="text-sm text-gray-300">{i + 1}. {demo}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Real-time Monitoring Tab */}
          {activeTab === 'realtime' && (
            <div className="space-y-8">
              {/* Live Metrics Stream */}
              <div className="grid md:grid-cols-6 gap-4">
                {[
                  { label: 'Live Predictions', value: (realTimeData.newPredictions || 147).toLocaleString(), icon: Brain, color: 'blue' },
                  { label: 'Bias Detections', value: realTimeData.biasDetections || 2, icon: AlertTriangle, color: 'red' },
                  { label: 'Fairness Score', value: `${realTimeData.fairnessScore || '84.7'}%`, icon: Scale, color: 'green' },
                  { label: 'Anomalies', value: realTimeData.anomaliesDetected || 0, icon: Flag, color: 'orange' },
                  { label: 'Ethical Risk', value: `${realTimeData.ethicalRiskScore || '7.3'}/10`, icon: Shield, color: 'purple' },
                  { label: 'Compliance', value: realTimeData.complianceStatus || 'compliant', icon: CheckCircle, color: 'cyan' }
                ].map((metric, idx) => (
                  <div key={idx} className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-4 border border-purple-500/30 shadow-2xl">
                    <div className="flex items-center gap-2 mb-3">
                      <metric.icon size={20} className={`text-${metric.color}-400`} />
                      <span className="text-xs text-gray-400">{metric.label}</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <div className="flex items-center gap-1 mt-1">
                      <div className={`w-2 h-2 rounded-full bg-${metric.color}-400 animate-pulse`} />
                      <span className="text-xs text-gray-400">Live</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Model Status Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredModels.map(model => (
                  <div key={model.id} 
                       className={`bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border transition-all hover:scale-105 ${
                         model.status === 'active' ? 'border-green-500/50 shadow-green-500/20' : 'border-red-500/50 shadow-red-500/20'
                       } shadow-2xl`}>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full ${
                          model.status === 'active' ? 'bg-green-400' : 'bg-red-400'
                        } animate-pulse`} />
                        <div>
                          <h4 className="font-bold text-lg">{model.name}</h4>
                          <div className="text-xs text-gray-400">{model.provider} v{model.version}</div>
                        </div>
                      </div>
                      <button 
                        onClick={() => toggleModelExpansion(model.id)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {expandedModels.has(model.id) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Bias Score</span>
                          <span className={`font-mono font-bold ${getBiasColor(model.biasScore)}`}>
                            {model.biasScore.toFixed(3)}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Fairness</span>
                          <span className="font-mono text-cyan-400">{model.fairnessIndex}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Predictions</span>
                          <span className="font-mono text-blue-400">{model.predictions.toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Uptime</span>
                          <span className="font-mono text-green-400">{model.uptime}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Latency</span>
                          <span className="font-mono text-purple-400">{model.latency}ms</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Alerts</span>
                          <span className={`font-mono font-bold ${model.alerts > 0 ? 'text-red-400' : 'text-green-400'}`}>
                            {model.alerts}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Risk Level Indicator */}
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(model.riskLevel)} mb-4 inline-block`}>
                      {model.riskLevel.toUpperCase()} RISK
                    </div>
                    
                    {/* Fairness Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300">Fairness Index</span>
                        <span className="text-gray-300">{model.fairnessIndex}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all ${
                            model.fairnessIndex > 90 ? 'bg-gradient-to-r from-green-400 to-emerald-400' : 
                            model.fairnessIndex > 80 ? 'bg-gradient-to-r from-yellow-400 to-orange-400' : 
                            'bg-gradient-to-r from-red-400 to-pink-400'
                          }`}
                          style={{ width: `${model.fairnessIndex}%` }}
                        />
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {expandedModels.has(model.id) && (
                      <div className="border-t border-gray-600 pt-4 space-y-4">
                        <div>
                          <h5 className="font-semibold mb-2 text-cyan-300">Performance Metrics</h5>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="text-center bg-gray-700/30 rounded p-2">
                              <div className="font-mono text-green-400">{(model.performanceMetrics.precision * 100).toFixed(1)}%</div>
                              <div className="text-gray-400">Precision</div>
                            </div>
                            <div className="text-center bg-gray-700/30 rounded p-2">
                              <div className="font-mono text-blue-400">{(model.performanceMetrics.recall * 100).toFixed(1)}%</div>
                              <div className="text-gray-400">Recall</div>
                            </div>
                            <div className="text-center bg-gray-700/30 rounded p-2">
                              <div className="font-mono text-purple-400">{(model.performanceMetrics.auc * 100).toFixed(1)}%</div>
                              <div className="text-gray-400">AUC</div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-semibold mb-2 text-orange-300">Deployment Regions</h5>
                          <div className="flex flex-wrap gap-1">
                            {model.deploymentRegions.map(region => (
                              <span key={region} className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">
                                {region}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="font-semibold mb-2 text-pink-300">Audit Status</h5>
                          <div className={`px-3 py-1 rounded text-xs ${getSeverityColor(
                            model.auditStatus === 'exemplary' ? 'low' :
                            model.auditStatus === 'compliant' ? 'medium' :
                            model.auditStatus === 'needs_review' ? 'high' : 'critical'
                          )}`}>
                            {model.auditStatus.replace('_', ' ').toUpperCase()}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">Last audit: {model.lastAudit}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Congressional Oversight Tab */}
          {activeTab === 'congressional' && (
            <div className="space-y-8">
              <div className="bg-gray-800/30 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Building2 size={24} className="text-purple-400" />
                  Congressional Civil Rights Oversight Dashboard
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Critical Issues Requiring Legislative Action</h4>
                    <div className="space-y-4">
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                        <h5 className="font-medium text-red-300 mb-2 flex items-center gap-2">
                          <AlertTriangle size={16} />
                          Urgent: Systemic Healthcare AI Bias
                        </h5>
                        <p className="text-sm text-gray-300 mb-3">
                          Watson Oncology shows critical racial bias (0.31 score) affecting 2,847 patient decisions. 
                          Immediate congressional intervention required to prevent civil rights violations.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs">Civil Rights Act</span>
                          <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs">Title VII</span>
                          <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs">$2.4M Impact</span>
                        </div>
                      </div>
                      
                      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                        <h5 className="font-medium text-orange-300 mb-2 flex items-center gap-2">
                          <Clock size={16} />
                          Age Discrimination in Medical AI
                        </h5>
                        <p className="text-sm text-gray-300 mb-3">
                          Multiple AI systems show systematic bias against patients over 65, 
                          with measurable degradation in diagnostic accuracy.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">Age Discrimination Act</span>
                          <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">8 Violations</span>
                        </div>
                      </div>

                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <h5 className="font-medium text-yellow-300 mb-2 flex items-center gap-2">
                          <Scale size={16} />
                          Regulatory Compliance Gaps
                        </h5>
                        <p className="text-sm text-gray-300 mb-3">
                          78.3% Title VII compliance rate indicates systemic issues requiring 
                          enhanced oversight and enforcement mechanisms.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">Federal Standards</span>
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">Enforcement Gap</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Recommended Congressional Actions</h4>
                    <div className="space-y-3">
                      {[
                        { 
                          action: 'Emergency subpoena IBM for Watson Oncology bias audit',
                          priority: 'critical',
                          timeline: 'Immediate',
                          impact: 'High'
                        },
                        { 
                          action: 'Mandate algorithmic impact assessments for healthcare AI',
                          priority: 'high',
                          timeline: '30 days',
                          impact: 'High'
                        },
                        { 
                          action: 'Establish federal AI bias testing standards',
                          priority: 'high',
                          timeline: '90 days',
                          impact: 'Medium'
                        },
                        { 
                          action: 'Create AI Civil Rights Enforcement Division at DOJ',
                          priority: 'medium',
                          timeline: '180 days',
                          impact: 'High'
                        },
                        { 
                          action: 'Fund AI fairness research at NIH ($50M)',
                          priority: 'medium',
                          timeline: '1 year',
                          impact: 'Medium'
                        },
                        { 
                          action: 'Require quarterly bias reporting for federal contractors',
                          priority: 'low',
                          timeline: '6 months',
                          impact: 'Medium'
                        }
                      ].map((item, idx) => (
                        <div key={idx} className={`p-3 rounded-lg border ${getSeverityColor(item.priority)}`}>
                          <div className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              item.priority === 'critical' ? 'bg-red-400' :
                              item.priority === 'high' ? 'bg-orange-400' :
                              item.priority === 'medium' ? 'bg-yellow-400' : 'bg-green-400'
                            }`} />
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-200">{item.action}</div>
                              <div className="flex gap-3 mt-1 text-xs text-gray-400">
                                <span>Timeline: {item.timeline}</span>
                                <span>Impact: {item.impact}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex gap-4 flex-wrap">
                  <button
                    onClick={generateAdvancedReport}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all flex items-center gap-2 shadow-lg"
                  >
                    <Download size={20} />
                    Generate Congressional Ethics Report
                  </button>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center gap-2 shadow-lg">
                    <Calendar size={20} />
                    Schedule Congressional Hearing
                  </button>
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all flex items-center gap-2 shadow-lg">
                    <Send size={20} />
                    Issue Subpoena Request
                  </button>
                  <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all flex items-center gap-2 shadow-lg">
                    <Gavel size={20} />
                    Draft Legislation
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Floating Status Bar */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800/95 backdrop-blur-xl rounded-full px-8 py-4 border border-purple-500/50 flex items-center gap-8 shadow-2xl">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Ethics Command Center Active</span>
          </div>
          <div className="text-sm text-gray-300">
            Models: {ethicsMetrics.modelsMonitored}
          </div>
          <div className="text-sm text-gray-300">
            Predictions: {ethicsMetrics.predictionsAnalyzed.toLocaleString()}
          </div>
          <div className="text-sm text-gray-300">
            Critical Alerts: {criticalAlerts.length}
          </div>
          <div className="text-sm text-gray-300">
            Risk Level: {ethicsMetrics.predictedRiskScore}/10
          </div>
          <div className="text-sm text-gray-300">
            Compliance: {ethicsMetrics.congressionalCompliance}%
          </div>
          <div className="flex items-center gap-1">
            <Lock size={14} className="text-green-400" />
            <span className="text-sm text-green-300">Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAIEthicsMonitoringDashboard;
