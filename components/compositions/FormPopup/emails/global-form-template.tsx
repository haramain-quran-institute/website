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

interface GlobalFormEmailProps {
  organizerName: string;
  studentName: string;
  gender: string;
  age: string;
  relationship: string;
  email: string;
  whatsapp: string;
  course: string;
  specialNeeds: string;
  specialNeedsDetails: string;
  previousExperience: string;
  additionalNotes: string;
  bookingDate: string;
  bookingTime: string;
  duration: string;
  timezone: string;
  meetingType: string;
  city: string;
  country: string;
  url: string;
}

export default function GlobalFormEmail({
  organizerName,
  studentName,
  gender,
  age,
  relationship,
  email,
  whatsapp,
  course,
  specialNeeds,
  specialNeedsDetails,
  previousExperience,
  additionalNotes,
  bookingDate,
  bookingTime,
  duration,
  timezone,
  meetingType,
  city,
  country,
  url,
}: GlobalFormEmailProps) {
  return (
    <Html>
      <Head />

      <Preview>
        New Free Trial Class Booking — {studentName}
      </Preview>

      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={brand}>HARAMAIN</Text>
            <Text style={brandSub}>QURAN INSTITUTE</Text>
          </Section>

          <Hr style={divider} />

          <Text style={welcome}>
            <b>New Free Trial Class Booking</b>
          </Text>

          <Text style={paragraph}>
            A new free trial class has been booked through the Haramain Quran
            Institute website.
          </Text>

          <Hr style={divider} />

          <Text style={sectionTitle}>Class Details</Text>

          <Text style={paragraph}>
            Date: <span style={details}>{bookingDate}</span>
          </Text>

          <Text style={paragraph}>
            Time: <span style={details}>{bookingTime}</span>
          </Text>

          <Text style={paragraph}>
            Duration: <span style={details}>{duration}</span>
          </Text>

          <Text style={paragraph}>
            Timezone: <span style={details}>{timezone}</span>
          </Text>

          <Text style={paragraph}>
            Meeting: <span style={details}>{meetingType}</span>
          </Text>

          <Hr style={divider} />

          <Text style={sectionTitle}>Student Information</Text>

          <Text style={paragraph}>
            Student Name: <span style={details}>{studentName}</span>
          </Text>

          <Text style={paragraph}>
            Gender: <span style={details}>{gender}</span>
          </Text>

          <Text style={paragraph}>
            Age: <span style={details}>{age}</span>
          </Text>

          <Text style={paragraph}>
            Course: <span style={details}>{course}</span>
          </Text>

          <Text style={paragraph}>
            Previous Quran Education:{" "}
            <span style={details}>{previousExperience}</span>
          </Text>

          <Text style={paragraph}>
            Special Need:{" "}
            <span style={details}>{specialNeeds}</span>
          </Text>

          {specialNeedsDetails !== "Not Provided" && (
            <Text style={paragraph}>
              Special Need Details:{" "}
              <span style={details}>{specialNeedsDetails}</span>
            </Text>
          )}

          <Hr style={divider} />

          <Text style={sectionTitle}>Organizer Information</Text>

          <Text style={paragraph}>
            Organizer Name:{" "}
            <span style={details}>{organizerName}</span>
          </Text>

          <Text style={paragraph}>
            Relationship to Student:{" "}
            <span style={details}>{relationship}</span>
          </Text>

          <Text style={paragraph}>
            Email: <span style={details}>{email}</span>
          </Text>

          <Text style={paragraph}>
            WhatsApp: <span style={details}>{whatsapp}</span>
          </Text>

          {additionalNotes !== "Not Provided" && (
            <>
              <Hr style={divider} />

              <Text style={sectionTitle}>Additional Notes</Text>

              <Text style={paragraph}>
                {additionalNotes}
              </Text>
            </>
          )}

          <Hr style={divider} />

          <Text style={sectionTitle}>Submission Information</Text>

          <Text style={meta}>
            Location: {city}, {country}
          </Text>

          <Text style={meta}>
            Submitted From: {url}
          </Text>

          <Text style={footer}>
            Haramain Quran Institute
            <br />
            Free Trial Class Booking
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  padding: "48px 20px",
  background: "#FBF6EF",
  fontFamily: "Arial, sans-serif",
};

const container = {
  maxWidth: "620px",
  margin: "0 auto",
  padding: "40px",
  background: "#FFFFFF",
  border: "1px solid #E7DED1",
};

const header = {
  textAlign: "center" as const,
  paddingBottom: "10px",
};

const brand = {
  margin: "0",
  color: "#0D463E",
  fontSize: "24px",
  fontWeight: "700",
  letterSpacing: "5px",
};

const brandSub = {
  margin: "5px 0 0",
  color: "#D0A86C",
  fontSize: "10px",
  fontWeight: "600",
  letterSpacing: "4px",
};

const divider = {
  borderColor: "#E7DED1",
  margin: "25px 0",
};

const welcome = {
  color: "#161513",
  fontSize: "18px",
  lineHeight: "1.4",
};

const sectionTitle = {
  color: "#0D463E",
  fontSize: "13px",
  fontWeight: "700",
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
  marginBottom: "14px",
};

const paragraph = {
  color: "#55524D",
  fontSize: "14px",
  lineHeight: "1.7",
  margin: "8px 0",
};

const details = {
  color: "#161513",
  fontWeight: "700",
};

const meta = {
  color: "#77736D",
  fontSize: "12px",
  lineHeight: "1.6",
  margin: "5px 0",
};

const footer = {
  color: "#0D463E",
  fontSize: "12px",
  lineHeight: "1.6",
  textAlign: "center" as const,
  marginTop: "30px",
};