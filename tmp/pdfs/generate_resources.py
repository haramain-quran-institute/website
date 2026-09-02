from pathlib import Path
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "output" / "pdf"
PUBLIC = ROOT / "public" / "resources"
OUT.mkdir(parents=True, exist_ok=True)
PUBLIC.mkdir(parents=True, exist_ok=True)

resources = [
    ("tajweede-quran", "color-coded-tajweed-guide", "Color-Coded Tajweed Guide", ["Recognizing common Tajweed color cues", "Applying rules while reading", "A short daily practice method"]),
    ("tajweede-quran", "tajweed-rules-reference", "Essential Tajweed Rules Reference", ["Noon Sakinah and Tanween", "Meem Sakinah", "Madd and stopping signs"]),
    ("tajweede-quran", "daily-recitation-workbook", "Daily Recitation Workbook", ["Warm-up checklist", "Guided verse practice", "Self-review notes"]),
    ("tajweede-quran", "quran-reading-progress-journal", "Quran Reading Progress Journal", ["Weekly reading goals", "Teacher corrections", "Reflection and next steps"]),
    ("tajweede-qaida", "tajweede-qaida-beginner", "Tajweede Qaida for Beginners", ["Arabic letter recognition", "Short vowels and joining", "Clear beginner practice"]),
    ("tajweede-qaida", "makharij-practice-guide", "Makharij Practice Guide", ["Key articulation areas", "Letter-pair exercises", "Listening and repetition"]),
    ("tajweede-qaida", "qaida-lesson-workbook", "Qaida Lesson Workbook", ["Lesson-by-lesson review", "Reading exercises", "Progress checkpoints"]),
    ("tajweede-qaida", "parent-qaida-support", "Parent's Qaida Support Guide", ["Supporting practice at home", "Encouraging young learners", "Working with the teacher"]),
    ("namaz-book", "complete-namaz-guide", "Complete Namaz Guide", ["Preparation for Salah", "Prayer movements and recitation", "Building consistency"]),
    ("namaz-book", "wudu-and-salah", "Wudu and Salah Step by Step", ["Performing Wudu", "Preparing the prayer space", "Completing Salah carefully"]),
    ("namaz-book", "salah-for-children", "Salah Guide for Children", ["Why Muslims pray", "Easy steps to remember", "A weekly prayer tracker"]),
    ("namaz-book", "daily-prayer-tracker", "Daily Prayer Tracker", ["Five-prayer checklist", "Weekly reflection", "Gentle habit-building tips"]),
    ("kalma-book", "six-kalmas-guide", "The Six Kalmas Guide", ["Arabic text and meaning", "Pronunciation practice", "Memorization plan"]),
    ("kalma-book", "kalma-for-kids", "Kalmas for Young Learners", ["Short learning portions", "Repeat-and-recall method", "Family practice tracker"]),
    ("kalma-book", "faith-foundations", "Kalma and Foundations of Faith", ["Meaning of testimony", "Core beliefs", "Living with sincere faith"]),
    ("kalma-book", "kalma-memorization-workbook", "Kalma Memorization Workbook", ["Weekly targets", "Revision checks", "Meaning and reflection"]),
    ("downloads", "seerah-book", "A Concise Seerah Guide", ["Early life in Makkah", "Prophethood and perseverance", "Lessons for Muslim character"]),
    ("downloads", "stories-of-sahaba", "Stories of the Sahaba", ["Courage and sincerity", "Generosity and service", "Lessons for daily life"]),
    ("downloads", "stories-of-prophets", "Stories of the Prophets", ["Faith through trials", "Trust in Allah", "Timeless lessons and reflection"]),
    ("downloads", "islamic-duas-guide", "Islamic Duas and Daily Guidance", ["Morning and evening duas", "Duas for daily routines", "Understanding and mindfulness"]),
]

styles = getSampleStyleSheet()
title_style = ParagraphStyle("Title", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=28, leading=34, textColor=HexColor("#0D463E"), alignment=TA_CENTER, spaceAfter=12)
subtitle_style = ParagraphStyle("Subtitle", parent=styles["Normal"], fontName="Helvetica", fontSize=11, leading=17, textColor=HexColor("#56706B"), alignment=TA_CENTER)
heading_style = ParagraphStyle("Heading", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=17, leading=22, textColor=HexColor("#0D463E"), spaceBefore=8, spaceAfter=8)
body_style = ParagraphStyle("Body", parent=styles["BodyText"], fontName="Helvetica", fontSize=10.5, leading=17, textColor=HexColor("#304B46"), spaceAfter=8)
small_style = ParagraphStyle("Small", parent=styles["BodyText"], fontName="Helvetica", fontSize=8.5, leading=12, textColor=HexColor("#70827E"), alignment=TA_CENTER)

def decorate(canvas, doc):
    width, height = A4
    canvas.saveState()
    canvas.setFillColor(HexColor("#0D463E"))
    canvas.rect(0, height - 17 * mm, width, 17 * mm, fill=1, stroke=0)
    canvas.setFillColor(HexColor("#D0A86C"))
    canvas.rect(0, height - 18 * mm, width, 1 * mm, fill=1, stroke=0)
    canvas.setFont("Helvetica-Bold", 9)
    canvas.setFillColor(HexColor("#FFFFFF"))
    canvas.drawString(18 * mm, height - 10.5 * mm, "HARAMAIN QURAN INSTITUTE")
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(HexColor("#56706B"))
    canvas.drawString(18 * mm, 11 * mm, "Educational resource - haramainquraninstitute.com")
    canvas.drawRightString(width - 18 * mm, 11 * mm, f"Page {doc.page}")
    canvas.restoreState()

for section, slug, title, topics in resources:
    output = OUT / f"{slug}.pdf"
    doc = SimpleDocTemplate(str(output), pagesize=A4, rightMargin=20*mm, leftMargin=20*mm, topMargin=28*mm, bottomMargin=20*mm, title=title, author="Haramain Quran Institute")
    story = [Spacer(1, 18*mm), Paragraph(title, title_style), Paragraph("A concise learning resource prepared for students and families", subtitle_style), Spacer(1, 15*mm)]
    cards = []
    for i, topic in enumerate(topics, 1):
        cards.append([Paragraph(f"0{i}", heading_style), Paragraph(f"<b>{topic}</b><br/>Use this section as a guided starting point. Read carefully, practise consistently, and ask a qualified teacher whenever a point needs correction or further explanation.", body_style)])
    table = Table(cards, colWidths=[20*mm, 125*mm], rowHeights=[34*mm]*len(cards))
    table.setStyle(TableStyle([("BACKGROUND", (0,0), (-1,-1), HexColor("#F7F0E7")), ("BOX", (0,0), (-1,-1), 0.5, HexColor("#D8C7AF")), ("INNERGRID", (0,0), (-1,-1), 0.5, HexColor("#E6D9C8")), ("VALIGN", (0,0), (-1,-1), "MIDDLE"), ("LEFTPADDING", (0,0), (-1,-1), 10), ("RIGHTPADDING", (0,0), (-1,-1), 10)]))
    story += [table, Spacer(1, 12*mm), Paragraph("How to use this guide", heading_style), Paragraph("Choose one topic at a time. Review it with attention, practise what you learn, and record questions for your teacher. Consistent short study is more valuable than rushing through many pages.", body_style), Spacer(1, 4*mm), Paragraph("This introductory resource supports learning and does not replace personal instruction from a qualified scholar or Quran teacher.", small_style)]
    doc.build(story, onFirstPage=decorate, onLaterPages=decorate)
    (PUBLIC / output.name).write_bytes(output.read_bytes())

print(f"Created {len(resources)} PDFs in {OUT} and copied them to {PUBLIC}")
