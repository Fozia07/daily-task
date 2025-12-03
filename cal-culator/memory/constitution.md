<!--
Sync Impact Report:
Version change:  → 1.0.0 (MAJOR: Initial creation)
Modified principles: All principles are new based on user input.
Added sections: All sections are new based on user input.
Removed sections: Original template sections like '[SECTION_2_NAME]' and '[SECTION_3_NAME]' were removed.
Templates requiring updates:
- .specify/templates/plan-template.md ⚠ pending
- .specify/templates/spec-template.md ⚠ pending
- .specify/templates/tasks-template.md ⚠ pending
- .specify/templates/commands/*.md ⚠ pending
Follow-up TODOs: TODO(RATIFICATION_DATE) - Ratification date for the constitution is unknown.
-->
# Simple Calculator Project Constitution

## 1. Purpose

This Constitution defines the project-wide quality standards for the Simple Calculator project.
All work across every phase (Specification, Planning, Tasks, and Implementation) MUST follow these rules.
The goal is to ensure clarity, consistency, and correctness in all deliverables.

## 2. Writing Standards
### 2.1 Clarity

All text must be unambiguous, clear, and easily understandable.

Avoid vague words such as “maybe,” “somehow,” “etc.,” “should work,” or “handle properly.”

Every requirement must express one and only one meaning.

### 2.2 Completeness

No section can leave missing information, assumptions, or “decide later” notes.

Each requirement must provide enough detail for implementation and testing.
### 2.3 Consistency

Terminology must remain stable across all phases.

If “operand” is used once, do not switch to “input number” later unless defined.

All rules must be applied uniformly across all files.

## 3. Structure Standards
### 3.1 Specification Rules

Every feature must include:

User stories

Acceptance criteria

Functional requirements

Edge cases

All acceptance criteria must be testable.

### 3.2 Planning Rules

The plan must break work into logical, sequential steps.

Unknowns or assumptions must be explicitly written.

No technical decisions should contradict the specification.

### 3.3 Task Rules

Each task must have:

Clear description

Expected output

Acceptance test

No task may depend on hidden or missing work.
### 3.4 Implementation Rules

Implementation must follow the specification exactly.

No feature may be added unless specified.

Code must be simple, readable, and minimal.

## 4. Testing Standards
### 4.1 Testability

Every acceptance criterion must be directly testable.

Tests must include edge cases, invalid inputs, and normal operations.

### 4.2 Automated Thinking

When writing tests, explain the scenario in clear English before writing assertions.

Tests must not assume behavior that is not explicitly written in the specification.
## 5. Quality & Ethics
### 5.1 No Plagiarism

All writing must be original and created by the student or generated through SpecKitPlus.

Copy-pasting from external sources is strictly prohibited.

### 5.2 Source Transparency

Any external reference, example, or logic inspiration must be clearly mentioned.

### 5.3 Safety & Integrity

Never bypass test failures without fixing the root cause.

All files must reflect honest work.
## 6. Change Control

Any change to the specification, plan, or tasks must be documented.

No part of the project may change silently or implicitly.

## 7. Final Principle

The purpose of this Constitution is to ensure that the project remains clear, correct, consistent, complete, and testable at every stage.

## Governance

**Version**: 1.0.0 | **Ratified**: 2025-12-03 | **Last Amended**: 2025-12-03
