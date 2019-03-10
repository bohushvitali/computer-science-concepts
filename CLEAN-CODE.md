# Clean Code

> References
- [Clean Code Cheat Sheet ](https://www.planetgeek.ch/wp-content/uploads/2014/11/Clean-Code-V2.4.pdf)

## Why Clean Code
Code is clean if it can be understood easily – by everyone on the team. With
understandability comes readability, changeability, extensibility and
maintainability. All the things needed to keep a project going over a long
time without accumulating up a large amount of technical debt.

Technical Debt
![Technical Debt](https://www.chudovo.com/Content/Images/Blog/CleanCode/why-clean-code.png)

Writing clean code from the start in a project is an investment in keeping
the cost of change as constant as possible throughout the lifecycle of a
software product. Therefore, the initial cost of change is a bit higher when
writing clean code (grey line) than quick and dirty programming (black line),
but is paid back quite soon. Especially if you keep in mind that most of the
cost has to be paid during maintenance of the software. Unclean code
results in technical debt that increases over time if not refactored into clean
code. There are other reasons leading to Technical Debt such as bad
processes and lack of documentation, but unclean code is a major driver. As
a result, your ability to respond to changes is reduced (red line).

### :large_blue_circle: In Clean Code, Bugs Cannot Hide

Most software defects are introduced when changing existing code. The
reason behind this is that the developer changing the code cannot fully
grasp the effects of the changes made. Clean code minimises the risk of
introducing defects by making the code as easy to understand as possible.

## Principles
### :large_blue_circle: Loose Coupling
Two classes, components or modules are coupled when at least one of
them uses the other. The less these items know about each other, the
looser they are coupled.

A component that is only loosely coupled to its environment can be more
easily changed or replaced than a strongly coupled component.

### :large_blue_circle: High Cohesion
Cohesion is the degree to which elements of a whole belong together.
Methods and fields in a single class and classes of a component should have
high cohesion. High cohesion in classes and components results in simpler,
more easily understandable code structure and design.

### :large_blue_circle: Change is Local
When a software system has to be maintained, extended and changed for a
long time, keeping change local reduces involved costs and risks. Keeping
change local means that there are boundaries in the design which changes
do not cross.

### :large_blue_circle: It is Easy to Remove
We normally build software by adding, extending or changing features.
However, removing elements is important so that the overall design can be
kept as simple as possible. When a block gets too complicated, it has to be
removed and replaced with one or more simpler blocks.

### :large_blue_circle: Mind-sized components
Break your system down into components that are of a size you can grasp
within your mind so that you can predict consequences of changes easily
(dependencies, control flow, …).

## Smells
### :red_circle: Rigidity
The software is difficult to change. A small change causes a cascade of
subsequent changes.

### :red_circle:  Fragility
The software breaks in many places due to a single change.

### :red_circle:  Immobility
You cannot reuse parts of the code in other projects because of involved
risks and high effort.

### :red_circle:  Viscosity of Design
Taking a shortcut and introducing technical debt requires less effort than
doing it right.

### :red_circle: ### Viscosity of Environment
Building, testing and other tasks take a long time. Therefore, these activities
are not executed properly by everyone and technical debt is introduced.

### :red_circle:  Needless Complexity
The design contains elements that are currently not useful. The added
complexity makes the code harder to comprehend. Therefore, extending
and changing the code results in higher effort than necessary.

### :red_circle:  Needless Repetition
Code contains exact code duplications or design duplicates (doing the same
thing in a different way). Making a change to a duplicated piece of code is
more expensive and more error-prone because the change has to be made
in several places with the risk that one place is not changed accordingly

### :red_circle:  Opacity
The code is hard to understand. Therefore, any change takes additional time
to first reengineer the code and is more likely to result in defects due to not
understanding the side effects.

## Class Design
### :large_blue_circle: Single Responsibility Principle (SRP)
A class should have one, and only one, reason to change.

### :large_blue_circle: Open Closed Principle (OCP)
You should be able to extend a classes behaviour without modifying it.

### :large_blue_circle: Liskov Substitution Principle (LSP)
Derived classes must be substitutable for their base classes.

### :large_blue_circle: Dependency Inversion Principle (DIP)
Depend on abstractions, not on concretions.

### :large_blue_circle: Interface Segregation Principle (ISP)
Make fine grained interfaces that are client-specific.

### :large_blue_circle: Classes Should be Small
Smaller classes are easier to grasp. Classes should be smaller than about
100 lines of code. Otherwise, it is hard to spot how the class does its job and
it probably does more than a single job.

### :large_blue_circle: Do stuff or know others, but not both
Classes should either do stuff (algorithm, read data, write data, …) or
orchestrate other classes. This reduces coupling and simplifies testing

## Package Cohesion
### :large_blue_circle: Release Reuse Equivalency Principle (RREP)
The granule of reuse is the granule of release.

### :large_blue_circle: Common Closure Principle (CCP)
Classes that change together are packaged together.

### Common Reuse Principle (CRP)
Classes that are used together are packaged together.

## Package Coupling
### :large_blue_circle: Acyclic Dependencies Principle (ADP)
The dependency graph of packages must have no cycles.

### :large_blue_circle: Stable Dependencies Principle (SDP)
Depend in the direction of stability.

### :large_blue_circle: Stable Abstractions Principle (SAP)
Abstractness increases with stability

## General
### :large_blue_circle: Follow Standard Conventions
Coding-, architecture-, design guidelines (check them with tools)

### :large_blue_circle: Keep it Simple, Stupid (KISS)
Simpler is always better. Reduce complexity as much as possible.

### :large_blue_circle: Boy Scout Rule
Leave the campground cleaner than you found it.

### :large_blue_circle: Root Cause Analysis
Always look for the root cause of a problem. Otherwise, it will get you again.

### :red_circle: Multiple Languages in One Source File
C#, Java, JavaScript, XML, HTML, XAML, English, German …

## Environment

## Dependency Injection

## Design

## Dependencies

## Naming

## Understandability

## Methods

## Source Code Structure

## Conditionals

## Useless Stuff

## Maintainability Killers

## Exception Handling

## From Legacy Code to Clean Code

## Refactoring Patterns

## How to Learn Clean Code

## Bibliography

## Kinds of Automated Tests

## Design for Testability

## Structure

## Naming

## Don’t Assume

## Faking (Stubs, Fakes, Spies, Mocks, Test Doubles …)

## Unit Test Principles

## Unit Test Smells

## TDD Principles

## TDD Process Smells

## Red Bar Patterns

## Green Bar Patterns

## Acceptance Test Driven Development

## Continuous Integration

## Test Pyramid

## Bibliography

## ATDD, TDD cycle


![ATDD Process](https://toolsqa.com/wp-content/uploads/2017/03/ATDD-Acceptance-test-driven-development.png)

![ATDD Cycle](https://www.beeva.com/wp-content/uploads/2016/01/Flujo-atdd-tdd.png)

