import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface AlfursanContactEmailProps {
  formTitle?: string;
  name: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
  city: string;
  country: string;
  url: string;
  extraFields?: Array<{ label: string; value: string }>;
}

export function AlfursanContactEmail({
  formTitle = "Website Inquiry",
  name,
  email,
  phone,
  destination,
  message,
  city,
  country,
  url,
  extraFields = [],
}: AlfursanContactEmailProps) {
  const location =
    city && city !== "Unknown"
      ? `${city}${country && country !== "Unknown" ? `, ${country}` : ""}`
      : country && country !== "Unknown"
        ? country
        : "Not available";

  const filteredExtras = extraFields.filter(
    (f) => f.label.trim().length > 0 && f.value.trim().length > 0,
  );

  return (
    <Html>
      <Head />
      <Preview>
        New {formTitle} from {name || "Alfursan Contact Form"}
      </Preview>
      <Body style={styles.body}>
        <Container style={styles.outerContainer}>
          <Section style={styles.card}>
            <Img
              src="https://alfursan.digital/wp-content/uploads/2024/01/dark-green-logo.png"
              alt="Alfursan Logo"
              width={160}
              height={40}
              style={styles.logo}
            />

            <Text style={styles.heading}>New {formTitle}</Text>
            <Text style={styles.subheading}>
              A new guest has reached out via the Alfursan website.
            </Text>

            <Hr style={styles.hr} />

            <Section style={styles.infoGrid}>
              <div style={styles.infoItem}>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.value}>{name || "Not provided"}</Text>
              </div>
              <div style={styles.infoItem}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>{email}</Text>
              </div>
              <div style={styles.infoItem}>
                <Text style={styles.label}>Phone</Text>
                <Text style={styles.value}>{phone || "Not provided"}</Text>
              </div>
              <div style={styles.infoItem}>
                <Text style={styles.label}>Destination</Text>
                <Text style={styles.value}>
                  {destination || "Not specified"}
                </Text>
              </div>
            </Section>

            {filteredExtras.length > 0 && (
              <>
                <Hr style={styles.hr} />
                <Section style={styles.extraGrid}>
                  {filteredExtras.map((item) => (
                    <div
                      key={`${item.label}:${item.value}`}
                      style={styles.infoItem}
                    >
                      <Text style={styles.label}>{item.label}</Text>
                      <Text style={styles.value}>{item.value}</Text>
                    </div>
                  ))}
                </Section>
              </>
            )}

            <Hr style={styles.hr} />

            <Section style={styles.messageSection}>
              <Text style={styles.messageLabel}>Message</Text>
              <Text style={styles.messageBody}>{message}</Text>
            </Section>

            <Hr style={styles.hr} />

            <Section style={styles.metaSection}>
              <Text style={styles.metaText}>
                <strong>Approx. Location:</strong> {location}
              </Text>
              <Text style={styles.metaText}>
                <strong>Submitted from:</strong> {url}
              </Text>
            </Section>

            <Text style={styles.footer}>
              Please respond to this inquiry at your earliest convenience.
              <br />
              <span style={{ opacity: 0.7 }}>
                This email was generated automatically from alfursan.digital.
              </span>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const styles: Record<string, React.CSSProperties> = {
  body: {
    margin: 0,
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    backgroundColor: "#f5f3ef",
    padding: "32px 16px",
    color: "#1a1612",
  },
  outerContainer: {
    maxWidth: "640px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.92)",
    borderRadius: 14,
    border: "1px solid rgba(17,96,96,0.12)",
    padding: "24px 26px 28px",
    boxShadow:
      "0 22px 60px rgba(0,0,0,0.16), 0 0 0 1px rgba(255,255,255,0.7) inset",
  },
  logo: {
    display: "block",
    margin: "0 auto 8px",
  },
  heading: {
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: "-0.03em",
    textAlign: "center",
    margin: "8px 0 4px",
    color: "#1a2020",
  },
  subheading: {
    fontSize: 13,
    textAlign: "center",
    color: "rgba(26,22,18,0.7)",
    marginBottom: 18,
  },
  hr: {
    borderColor: "rgba(17,96,96,0.18)",
    margin: "12px 0 18px",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,minmax(0,1fr))",
    gap: 12,
    marginBottom: 8,
  },
  extraGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,minmax(0,1fr))",
    gap: 12,
    marginBottom: 8,
  },
  infoItem: {},
  label: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    color: "#116060",
    marginBottom: 2,
  },
  value: {
    fontSize: 14,
    color: "#1a1612",
  },
  messageSection: {
    borderRadius: 10,
    border: "1px solid rgba(17,96,96,0.16)",
    background: "rgba(245,243,239,0.9)",
    padding: "12px 14px",
    marginBottom: 18,
  },
  messageLabel: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    color: "#116060",
    marginBottom: 4,
  },
  messageBody: {
    fontSize: 14,
    lineHeight: 1.6,
    whiteSpace: "pre-wrap",
  },
  metaSection: {
    marginBottom: 12,
  },
  metaText: {
    fontSize: 12,
    color: "rgba(26,22,18,0.7)",
    marginBottom: 2,
  },
  footer: {
    fontSize: 12,
    textAlign: "left",
    color: "rgba(26,22,18,0.7)",
    marginTop: 4,
  },
};
