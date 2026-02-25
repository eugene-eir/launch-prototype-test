import { useState } from "react";

const LaunchLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.15); }
        }
        @keyframes rocketFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes trailFade {
          0%, 100% { opacity: 0.4; height: 80px; }
          50% { opacity: 0.8; height: 120px; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gridDrift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        .launch-input::placeholder { color: rgba(255, 255, 255, 0.2); }
        .launch-btn:hover { transform: translateY(-1px); box-shadow: 0 8px 32px rgba(249, 115, 22, 0.3); }
        .launch-btn:active { transform: translateY(0); }
        .social-btn:hover { border-color: rgba(249, 115, 22, 0.5) !important; background: rgba(249, 115, 22, 0.1) !important; }
        .forgot-link:hover { color: #F97316 !important; }
      `}</style>

      <div style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Space Grotesk', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Animated grid */}
        <div style={{
          position: "absolute",
          inset: "-60px",
          backgroundImage: `
            linear-gradient(rgba(249, 115, 22, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249, 115, 22, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          animation: "gridDrift 20s linear infinite",
        }} />

        {/* Radial glow */}
        <div style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.07) 0%, transparent 65%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "breathe 6s ease-in-out infinite",
          pointerEvents: "none",
        }} />

        {/* Rocket accent - right */}
        <div style={{
          position: "absolute",
          top: "12%",
          right: "18%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pointerEvents: "none",
        }}>
          <div style={{
            fontSize: "28px",
            animation: "rocketFloat 3s ease-in-out infinite",
            filter: "drop-shadow(0 0 12px rgba(249, 115, 22, 0.4))",
          }}>🚀</div>
          <div style={{
            width: "2px",
            height: "80px",
            background: "linear-gradient(to bottom, rgba(249, 115, 22, 0.5), transparent)",
            animation: "trailFade 3s ease-in-out infinite",
            marginTop: "-4px",
            borderRadius: "2px",
          }} />
        </div>

        {/* Rocket accent - left, smaller */}
        <div style={{
          position: "absolute",
          bottom: "20%",
          left: "12%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pointerEvents: "none",
          opacity: 0.35,
        }}>
          <div style={{
            fontSize: "16px",
            animation: "rocketFloat 4s ease-in-out infinite 1s",
          }}>🚀</div>
          <div style={{
            width: "1px",
            height: "50px",
            background: "linear-gradient(to bottom, rgba(249, 115, 22, 0.3), transparent)",
            animation: "trailFade 4s ease-in-out infinite 1s",
            marginTop: "-2px",
          }} />
        </div>

        {/* Main content */}
        <div style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "420px",
          padding: "0 24px",
          animation: "slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          opacity: 0,
        }}>
          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{
              fontSize: "46px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-3px",
              fontFamily: "'Space Mono', monospace",
            }}>
              <span style={{ color: "#F97316" }}>L</span>AUNCH
            </div>
            <div style={{
              fontSize: "10px",
              color: "rgba(255, 255, 255, 0.3)",
              letterSpacing: "8px",
              textTransform: "uppercase",
              marginTop: "8px",
              fontWeight: 400,
            }}>
              We Back Builders
            </div>
          </div>

          {/* Card */}
          <div style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.07)",
            borderRadius: "20px",
            padding: "36px 32px 32px",
            backdropFilter: "blur(24px)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
          }}>
            {/* Tabs */}
            <div style={{
              display: "flex",
              marginBottom: "28px",
              background: "rgba(255, 255, 255, 0.04)",
              borderRadius: "12px",
              padding: "4px",
            }}>
              {["login", "signup"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    flex: 1,
                    padding: "11px 0",
                    border: "none",
                    borderRadius: "9px",
                    background: activeTab === tab
                      ? "linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(249, 115, 22, 0.1))"
                      : "transparent",
                    color: activeTab === tab ? "#F97316" : "rgba(255, 255, 255, 0.35)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  {tab === "login" ? "Log In" : "Sign Up"}
                </button>
              ))}
            </div>

            {/* Social buttons */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
              {[
                { name: "Google", icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                )},
                { name: "GitHub", icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                )},
                { name: "X", icon: (
                  <span style={{ fontSize: "16px", fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>𝕏</span>
                )},
              ].map((provider) => (
                <button
                  key={provider.name}
                  className="social-btn"
                  title={`Continue with ${provider.name}`}
                  style={{
                    flex: 1,
                    padding: "13px 0",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "12px",
                    background: "rgba(255, 255, 255, 0.03)",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {provider.icon}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "24px",
            }}>
              <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
              <span style={{
                fontSize: "9px",
                color: "rgba(255, 255, 255, 0.2)",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontFamily: "'Space Mono', monospace",
              }}>or</span>
              <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {activeTab === "signup" && (
                <div style={{ marginBottom: "16px" }}>
                  <label style={{
                    display: "block",
                    fontSize: "9px",
                    color: "rgba(255, 255, 255, 0.35)",
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                    fontFamily: "'Space Mono', monospace",
                  }}>Full Name</label>
                  <input
                    type="text"
                    className="launch-input"
                    placeholder="Ada Lovelace"
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "12px",
                      background: "rgba(255, 255, 255, 0.03)",
                      color: "#ffffff",
                      fontSize: "14px",
                      outline: "none",
                      transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                      fontFamily: "'Space Grotesk', sans-serif",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(249, 115, 22, 0.5)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(249, 115, 22, 0.08)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.08)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              )}

              <div style={{ marginBottom: "16px" }}>
                <label style={{
                  display: "block",
                  fontSize: "9px",
                  color: "rgba(255, 255, 255, 0.35)",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                  fontFamily: "'Space Mono', monospace",
                }}>Email</label>
                <input
                  type="email"
                  className="launch-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="founder@startup.com"
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "12px",
                    background: "rgba(255, 255, 255, 0.03)",
                    color: "#ffffff",
                    fontSize: "14px",
                    outline: "none",
                    transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                    fontFamily: "'Space Grotesk', sans-serif",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(249, 115, 22, 0.5)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(249, 115, 22, 0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.08)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <div style={{ marginBottom: "8px" }}>
                <label style={{
                  display: "block",
                  fontSize: "9px",
                  color: "rgba(255, 255, 255, 0.35)",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                  fontFamily: "'Space Mono', monospace",
                }}>Password</label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="launch-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••"
                    style={{
                      width: "100%",
                      padding: "14px 56px 14px 16px",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "12px",
                      background: "rgba(255, 255, 255, 0.03)",
                      color: "#ffffff",
                      fontSize: "14px",
                      outline: "none",
                      transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                      fontFamily: "'Space Grotesk', sans-serif",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(249, 115, 22, 0.5)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(249, 115, 22, 0.08)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.08)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "14px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      color: "rgba(255, 255, 255, 0.25)",
                      cursor: "pointer",
                      fontSize: "9px",
                      fontFamily: "'Space Mono', monospace",
                      letterSpacing: "1.5px",
                      padding: "4px",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => e.target.style.color = "#F97316"}
                    onMouseLeave={(e) => e.target.style.color = "rgba(255, 255, 255, 0.25)"}
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </button>
                </div>
              </div>

              {activeTab === "login" && (
                <div style={{ textAlign: "right", marginBottom: "24px" }}>
                  <a
                    href="#"
                    className="forgot-link"
                    style={{
                      fontSize: "11px",
                      color: "rgba(255, 255, 255, 0.3)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </a>
                </div>
              )}

              {activeTab === "signup" && <div style={{ height: "16px" }} />}

              {/* Submit */}
              <button
                type="submit"
                className="launch-btn"
                disabled={isLoading}
                style={{
                  width: "100%",
                  padding: "15px 0",
                  border: "none",
                  borderRadius: "12px",
                  background: isLoading
                    ? "rgba(249, 115, 22, 0.3)"
                    : "linear-gradient(135deg, #F97316, #FB923C)",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  cursor: isLoading ? "wait" : "pointer",
                  transition: "all 0.3s ease",
                  fontFamily: "'Space Mono', monospace",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {isLoading ? (
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}>
                    <div style={{
                      width: "16px",
                      height: "16px",
                      border: "2px solid rgba(255,255,255,0.3)",
                      borderTopColor: "#fff",
                      borderRadius: "50%",
                      animation: "spin 0.8s linear infinite",
                    }} />
                    <span>Launching...</span>
                  </div>
                ) : (
                  activeTab === "login" ? "Log In →" : "Create Account →"
                )}
              </button>
            </form>
          </div>

          {/* Footer */}
          <div style={{
            textAlign: "center",
            marginTop: "28px",
            fontSize: "11px",
            color: "rgba(255, 255, 255, 0.2)",
          }}>
            {activeTab === "login" ? (
              <span>
                Don't have an account?{" "}
                <a
                  href="#"
                  className="forgot-link"
                  onClick={(e) => { e.preventDefault(); setActiveTab("signup"); }}
                  style={{ color: "#F97316", textDecoration: "none", fontWeight: 500 }}
                >
                  Apply to LAUNCH
                </a>
              </span>
            ) : (
              <span>
                Already have an account?{" "}
                <a
                  href="#"
                  className="forgot-link"
                  onClick={(e) => { e.preventDefault(); setActiveTab("login"); }}
                  style={{ color: "#F97316", textDecoration: "none", fontWeight: 500 }}
                >
                  Log in
                </a>
              </span>
            )}
          </div>

          {/* Legal */}
          <div style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "9px",
            color: "rgba(255, 255, 255, 0.12)",
            letterSpacing: "0.5px",
          }}>
            By continuing, you agree to our Terms of Service & Privacy Policy
          </div>
        </div>
      </div>
    </>
  );
};

export default LaunchLogin;
