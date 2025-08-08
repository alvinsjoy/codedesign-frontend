import { useState } from "react";
import styles from "./popup.module.css";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Popup({ isOpen, onClose }: PopupProps) {
  const [activeTab, setActiveTab] = useState<"html" | "nextjs">("html");
  const [htmlOptions, setHtmlOptions] = useState({
    includeAssets: true,
    includeCustomCode: true,
  });
  const [nextjsOptions, setNextjsOptions] = useState({
    useAppDirectory: true,
    includeAssetsLocally: true,
    includeCustomCode: true,
  });

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.popupOverlay} onClick={handleOverlayClick}>
      <div className={styles.popupContainer}>
        <div className={styles.popupHeader}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h2 className={styles.popupTitle}>Code Export</h2>
              <p className={styles.popupSubtitle}>
                Manage how you download your website's code.
              </p>
            </div>
            <button className={styles.closeButton} onClick={onClose}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 5.5L5.5 16.5"
                  stroke="white"
                  strokeOpacity="0.5"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 5.5L16.5 16.5"
                  stroke="white"
                  strokeOpacity="0.5"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.popupBody}>
          <div className={styles.contentContainer}>
            <div className={styles.tabPicker}>
              <button
                className={`${styles.tabOption} ${
                  activeTab === "html" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("html")}
              >
                HTML & CSS
              </button>
              <button
                className={`${styles.tabOption} ${
                  activeTab === "nextjs" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("nextjs")}
              >
                Next JS
              </button>
            </div>

            <div className={styles.tabContent}>
              {activeTab === "html" ? (
                <div className={styles.exportSection}>
                  <div className={styles.exportHeader}>
                    <div className={styles.exportInfo}>
                      <div className={styles.exportIcon}>
                        <svg
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_html)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.139404 0L1.74422 17.9997L8.94637 20L16.1681 17.998L17.7761 0H0.139404ZM14.2817 5.88867H5.83439L6.03621 8.14941H14.0815L13.476 14.9268L8.948 16.1816L4.42489 14.9268L4.11564 11.4583H6.33244L6.49032 13.221L8.94963 13.8835L8.95451 13.8818L11.4138 13.2178L11.6694 10.3548H4.01799L3.42391 3.67839H14.4819L14.2817 5.88867Z"
                              fill="white"
                              fillOpacity="0.8"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_html">
                              <rect
                                width="17.6367"
                                height="20"
                                fill="white"
                                transform="translate(0.139404)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <span className={styles.exportText}>
                        Export as HTML & CSS
                      </span>
                    </div>
                    <div className={styles.exportBadge}>Zipped</div>
                  </div>

                  <div className={styles.optionsList}>
                    <div className={styles.optionItem}>
                      <div className={styles.checkboxContainer}>
                        <div
                          className={`${styles.customCheckbox} ${
                            htmlOptions.includeAssets ? styles.checked : ""
                          }`}
                          onClick={() =>
                            setHtmlOptions((prev) => ({
                              ...prev,
                              includeAssets: !prev.includeAssets,
                            }))
                          }
                        >
                          {htmlOptions.includeAssets && (
                            <svg
                              width="14"
                              height="9"
                              viewBox="0 0 14 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.25 0C12.3685 0 12.4801 0.0250651 12.585 0.0751953C12.6898 0.120768 12.7809 0.18457 12.8584 0.266602C12.9404 0.344076 13.0042 0.435221 13.0498 0.540039C13.0999 0.644857 13.125 0.75651 13.125 0.875C13.125 1.12109 13.0407 1.32845 12.8721 1.49707L5.65332 8.71582C5.4847 8.88444 5.27734 8.96875 5.03125 8.96875C4.78516 8.96875 4.5778 8.88444 4.40918 8.71582L0.25293 4.55957C0.0843099 4.39095 0 4.18359 0 3.9375C0 3.81901 0.0227865 3.70736 0.0683594 3.60254C0.11849 3.49772 0.182292 3.40658 0.259766 3.3291C0.341797 3.24707 0.435221 3.18327 0.540039 3.1377C0.649414 3.08756 0.761068 3.0625 0.875 3.0625C1.12109 3.0625 1.32845 3.14681 1.49707 3.31543L5.03125 6.85645L11.6279 0.25293C11.7965 0.0843099 12.0039 0 12.25 0Z"
                                fill="white"
                              />
                            </svg>
                          )}
                        </div>
                        <span className={styles.optionText}>
                          Include assets (images, styles, fonts, etc.)
                        </span>
                      </div>
                    </div>

                    <div className={styles.optionItem}>
                      <div className={styles.checkboxContainer}>
                        <div
                          className={`${styles.customCheckbox} ${
                            htmlOptions.includeCustomCode ? styles.checked : ""
                          }`}
                          onClick={() =>
                            setHtmlOptions((prev) => ({
                              ...prev,
                              includeCustomCode: !prev.includeCustomCode,
                            }))
                          }
                        >
                          {htmlOptions.includeCustomCode && (
                            <svg
                              width="14"
                              height="9"
                              viewBox="0 0 14 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.25 0C12.3685 0 12.4801 0.0250651 12.585 0.0751953C12.6898 0.120768 12.7809 0.18457 12.8584 0.266602C12.9404 0.344076 13.0042 0.435221 13.0498 0.540039C13.0999 0.644857 13.125 0.75651 13.125 0.875C13.125 1.12109 13.0407 1.32845 12.8721 1.49707L5.65332 8.71582C5.4847 8.88444 5.27734 8.96875 5.03125 8.96875C4.78516 8.96875 4.5778 8.88444 4.40918 8.71582L0.25293 4.55957C0.0843099 4.39095 0 4.18359 0 3.9375C0 3.81901 0.0227865 3.70736 0.0683594 3.60254C0.11849 3.49772 0.182292 3.40658 0.259766 3.3291C0.341797 3.24707 0.435221 3.18327 0.540039 3.1377C0.649414 3.08756 0.761068 3.0625 0.875 3.0625C1.12109 3.0625 1.32845 3.14681 1.49707 3.31543L5.03125 6.85645L11.6279 0.25293C11.7965 0.0843099 12.0039 0 12.25 0Z"
                                fill="white"
                              />
                            </svg>
                          )}
                        </div>
                        <span className={styles.optionText}>
                          Include custom code
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.exportSection}>
                  <div className={styles.exportHeader}>
                    <div className={styles.exportInfo}>
                      <div className={styles.exportIcon}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.29752 7.5C3.10002 8.06667 1.66669 9.0375 1.66669 10.1458C1.66669 11.9017 5.33752 13.3333 9.87502 13.3333C10.4917 13.3333 10.925 13.3008 11.5 13.2525"
                            stroke="#D1D1D1"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.19751 13.2499C7.85335 12.7533 7.52585 12.3058 7.21418 11.7499C4.92168 7.66661 4.30751 3.60827 5.85585 2.68911C6.81418 2.10827 8.39501 2.89994 10.0008 4.56744"
                            stroke="#D1D1D1"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5.35752 12.8225C4.77252 15.0625 4.89085 16.7525 5.82418 17.3183C7.31002 18.2183 10.3134 15.6867 12.5267 11.6483C12.8267 11.09 13.0959 10.5408 13.3334 10"
                            stroke="#D1D1D1"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 15.4333C11.6067 17.1 13.1808 17.8917 14.1483 17.3108C15.69 16.3925 15.0825 12.3342 12.7875 8.25C12.4675 7.68583 12.14 7.24667 11.8042 6.75"
                            stroke="#D1D1D1"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.7167 12.5C16.8933 11.9275 18.3333 10.9583 18.3333 9.85329C18.3333 8.09496 14.66 6.66663 10.1292 6.66663C9.50667 6.66663 9.07417 6.69079 8.5 6.73913"
                            stroke="#D1D1D1"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.66669 10C6.90419 9.45004 7.17252 8.91004 7.47335 8.35171C9.67919 4.31504 12.6842 1.77671 14.1784 2.68421C15.1034 3.25004 15.23 4.93921 14.645 7.17838"
                            stroke="#D1D1D1"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.2166 10.0125H10.2083C10.2 10.1209 10.1083 10.2125 9.99165 10.2125C9.87581 10.2068 9.78449 10.1118 9.78331 9.99587C9.78331 9.87921 9.87498 9.78754 9.98331 9.78754H9.97498C10.0833 9.77921 10.1833 9.87921 10.1833 9.98754"
                            stroke="#D1D1D1"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className={styles.exportText}>
                        Export as Next JS Project
                      </span>
                    </div>
                    <div className={styles.exportBadge}>Zipped</div>
                  </div>

                  <div className={styles.optionsList}>
                    <div className={styles.optionItem}>
                      <div className={styles.checkboxContainer}>
                        <div
                          className={`${styles.customCheckbox} ${
                            nextjsOptions.useAppDirectory ? styles.checked : ""
                          }`}
                          onClick={() =>
                            setNextjsOptions((prev) => ({
                              ...prev,
                              useAppDirectory: !prev.useAppDirectory,
                            }))
                          }
                        >
                          {nextjsOptions.useAppDirectory && (
                            <svg
                              width="14"
                              height="9"
                              viewBox="0 0 14 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.25 0C12.3685 0 12.4801 0.0250651 12.585 0.0751953C12.6898 0.120768 12.7809 0.18457 12.8584 0.266602C12.9404 0.344076 13.0042 0.435221 13.0498 0.540039C13.0999 0.644857 13.125 0.75651 13.125 0.875C13.125 1.12109 13.0407 1.32845 12.8721 1.49707L5.65332 8.71582C5.4847 8.88444 5.27734 8.96875 5.03125 8.96875C4.78516 8.96875 4.5778 8.88444 4.40918 8.71582L0.25293 4.55957C0.0843099 4.39095 0 4.18359 0 3.9375C0 3.81901 0.0227865 3.70736 0.0683594 3.60254C0.11849 3.49772 0.182292 3.40658 0.259766 3.3291C0.341797 3.24707 0.435221 3.18327 0.540039 3.1377C0.649414 3.08756 0.761068 3.0625 0.875 3.0625C1.12109 3.0625 1.32845 3.14681 1.49707 3.31543L5.03125 6.85645L11.6279 0.25293C11.7965 0.0843099 12.0039 0 12.25 0Z"
                                fill="white"
                              />
                            </svg>
                          )}
                        </div>
                        <span className={styles.optionText}>
                          Use `app` directory (NextJS v13+)
                        </span>
                      </div>
                    </div>

                    <div className={styles.optionItem}>
                      <div className={styles.checkboxContainer}>
                        <div
                          className={`${styles.customCheckbox} ${
                            nextjsOptions.includeAssetsLocally
                              ? styles.checked
                              : ""
                          }`}
                          onClick={() =>
                            setNextjsOptions((prev) => ({
                              ...prev,
                              includeAssetsLocally: !prev.includeAssetsLocally,
                            }))
                          }
                        >
                          {nextjsOptions.includeAssetsLocally && (
                            <svg
                              width="14"
                              height="9"
                              viewBox="0 0 14 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.25 0C12.3685 0 12.4801 0.0250651 12.585 0.0751953C12.6898 0.120768 12.7809 0.18457 12.8584 0.266602C12.9404 0.344076 13.0042 0.435221 13.0498 0.540039C13.0999 0.644857 13.125 0.75651 13.125 0.875C13.125 1.12109 13.0407 1.32845 12.8721 1.49707L5.65332 8.71582C5.4847 8.88444 5.27734 8.96875 5.03125 8.96875C4.78516 8.96875 4.5778 8.88444 4.40918 8.71582L0.25293 4.55957C0.0843099 4.39095 0 4.18359 0 3.9375C0 3.81901 0.0227865 3.70736 0.0683594 3.60254C0.11849 3.49772 0.182292 3.40658 0.259766 3.3291C0.341797 3.24707 0.435221 3.18327 0.540039 3.1377C0.649414 3.08756 0.761068 3.0625 0.875 3.0625C1.12109 3.0625 1.32845 3.14681 1.49707 3.31543L5.03125 6.85645L11.6279 0.25293C11.7965 0.0843099 12.0039 0 12.25 0Z"
                                fill="white"
                              />
                            </svg>
                          )}
                        </div>
                        <span className={styles.optionText}>
                          Include assets locally (images, styles, fonts, etc.)
                        </span>
                      </div>
                    </div>

                    <div className={styles.optionItem}>
                      <div className={styles.checkboxContainer}>
                        <div
                          className={`${styles.customCheckbox} ${
                            nextjsOptions.includeCustomCode
                              ? styles.checked
                              : ""
                          }`}
                          onClick={() =>
                            setNextjsOptions((prev) => ({
                              ...prev,
                              includeCustomCode: !prev.includeCustomCode,
                            }))
                          }
                        >
                          {nextjsOptions.includeCustomCode && (
                            <svg
                              width="14"
                              height="9"
                              viewBox="0 0 14 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.25 0C12.3685 0 12.4801 0.0250651 12.585 0.0751953C12.6898 0.120768 12.7809 0.18457 12.8584 0.266602C12.9404 0.344076 13.0042 0.435221 13.0498 0.540039C13.0999 0.644857 13.125 0.75651 13.125 0.875C13.125 1.12109 13.0407 1.32845 12.8721 1.49707L5.65332 8.71582C5.4847 8.88444 5.27734 8.96875 5.03125 8.96875C4.78516 8.96875 4.5778 8.88444 4.40918 8.71582L0.25293 4.55957C0.0843099 4.39095 0 4.18359 0 3.9375C0 3.81901 0.0227865 3.70736 0.0683594 3.60254C0.11849 3.49772 0.182292 3.40658 0.259766 3.3291C0.341797 3.24707 0.435221 3.18327 0.540039 3.1377C0.649414 3.08756 0.761068 3.0625 0.875 3.0625C1.12109 3.0625 1.32845 3.14681 1.49707 3.31543L5.03125 6.85645L11.6279 0.25293C11.7965 0.0843099 12.0039 0 12.25 0Z"
                                fill="white"
                              />
                            </svg>
                          )}
                        </div>
                        <span className={styles.optionText}>
                          Include custom code
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.popupFooter}>
          <button className={styles.downloadButton}>
            {activeTab === "html"
              ? "Download HTML CSS Project"
              : "Download Next JS Project"}
          </button>
        </div>
      </div>
    </div>
  );
}
