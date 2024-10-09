import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./ProjectCap.css";
import incidentLogs from "./images/incidentlogs.png";
import vmrecover from "./images/vm-recover.png";
import firewall from "./images/firewall.png";
import enablelog from "./images/enable-log.png";
import bucket from "./images/bucket.png";

function ProjectCap() {
    const springProps = useSpring({
        to: { opacity: 1, transform: 'scale(1)' },
        from: { opacity: 0, transform: 'scale(0.8)' },
        config: { tension: 200, friction: 15 },
    });

    return (
        <animated.div className="project-cap-container" style={springProps}>
            <h1>Cymbal Retail: Cloud Security Incident Response</h1>
            <div className="subtitle">
                A Simulated Cybersecurity Scenario Developed by Google Cloud Skill Boost for Certification Training
            </div>

            {/* Section 1: Scenario */}
            <div className="card">
                <h2>Scenario</h2>
                <p>
                    Cymbal Retail boasts a vast customer base with a multitude of transactions happening daily on their online platform. The organization is committed to the safety and security of its customers, employees, and assets, ensuring that its operations meet internal and external regulatory compliance expectations in all the countries it operates in.
                </p>
                <p>
                    Recently, the company experienced a massive data breach. As a junior member of the security team, your task is to support the security team through the lifecycle of this incident. Start by identifying vulnerabilities, isolating and containing the breach, recovering compromised systems, remediating compliance-related issues, and verifying adherence to security frameworks.
                </p>
            </div>

            {/* Section 2: Executive Summary */}
            <div className="card">
                <h2>Executive Summary</h2>
                <p>
                    The security team detected unusual activity within the cloud systems. Further investigation revealed that the company suffered a massive breach across its applications, networks, systems, and data repositories, allowing attackers to gain unauthorized access to sensitive customer information.
                </p>
                <p>
                    The incident involved malware infection of an application VM, which had SSH and RDP services enabled, allowing attackers to establish connections.
                </p>
                <p>
                    It was discovered that the VM instance was created with a default service account that had full access to cloud APIs, posing a risk of privilege escalation.
                </p>
                <p>
                    The attackers exploited this access to escalate their attack and exfiltrate unencrypted credit card information, as well as identifying a public storage bucket with fine-grained access control that facilitated data extraction.
                </p>
            </div>

            {/* Section 3: Investigation */}
            <div className="card">
                <h2>Investigation</h2>
                <p>
                    A comprehensive investigation was conducted to determine the nature and extent of the compromise. Key findings included:
                </p>
                <img src={incidentLogs} alt="Incident Logs" className="project-image" />
                <ul>
                    <li>
                        <strong>Unauthorized access:</strong> Evidence showed that the attacker exploited open RDP and SSH services to gain access to the compromised VM, with access logs providing insights into their activities.
                    </li>
                    <li>
                        <strong>Privilege escalation:</strong> Forensic examination indicated lateral movement within the network, specifically unauthorized access to BigQuery.
                    </li>
                    <li>
                        <strong>Data exfiltration:</strong> Forensic analysis confirmed that credit card information was exfiltrated using a publicly accessible storage bucket.
                    </li>
                </ul>
            </div>

            {/* Section 4: Response and Remediation */}
            <div className="card">
                <h2>Response and Remediation</h2>
                <p>
                    To remediate the incident, a series of actions were taken, including:
                </p>
                <h3>Containment and Eradication Measures</h3>
                <ul>
                    <li>
                        <strong>Isolate the compromised VM:</strong> The compromised VM was immediately isolated from the network.
                    </li>
                    <li>
                        <strong>Restrict RDP and SSH access:</strong> Firewall rules were updated to restrict access to trusted IPv4 addresses.
                    </li>
                    <img src={firewall} alt="Firewall Configuration" className="project-image" />
                    <li>
                        <strong>Remove public storage bucket:</strong> Public access to the storage bucket was removed, and permissions were changed to uniform bucket-level access.
                    </li>
                    <img src={bucket} alt="Storage Bucket" className="project-image" />
                </ul>
                <h3>Recovery Measures</h3>
                <ul>
                    <li>
                        <strong>Restore from trusted snapshot:</strong> A new VM was created from a trusted snapshot taken prior to the incident.
                    </li>
                    <img src={vmrecover} alt="VM Recovery" className="project-image" />
                    <li>
                        <strong>Review security configuration:</strong> A comprehensive review was conducted across systems to identify and rectify any misconfigurations.
                    </li>
                    <li>
                        <strong>Improve monitoring:</strong> Monitoring mechanisms were strengthened, including real-time log analysis.
                    </li>
                    <img src={enablelog} alt="Enable Logging" className="project-image" />
                </ul>
                <p>
                    By implementing these measures, the security team successfully mitigated risks, removed the attacker’s presence, and restored affected systems.
                </p>
            </div>

            {/* Section 5: Recommendations */}
            <div className="card">
                <h2>Recommendations</h2>
                <p>
                    This incident provided valuable lessons that can inform future cybersecurity practices. The following recommendations should be implemented:
                </p>
                <ul>
                    <li>
                        <strong>Conduct regular risk assessments:</strong> Identify and prioritize potential security risks and vulnerabilities.
                    </li>
                    <li>
                        <strong>Implement multi-factor authentication (MFA):</strong> Enable MFA for all critical systems to enhance security.
                    </li>
                    <li>
                        <strong>Apply the principle of least privilege:</strong> Grant users only the permissions necessary for their roles.
                    </li>
                    <li>
                        <strong>Conduct penetration testing:</strong> Regularly perform tests to identify and address security weaknesses.
                    </li>
                </ul>
            </div>
        </animated.div>
    );
}

export default ProjectCap;
