
# Clean Architecture

> References
- [Clean Architecture Cheat Sheet ](https://www.planetgeek.ch/wp-content/uploads/2016/03/Clean-Architecture-V1.0.pdf)

## Why is a clean, simple, flexible, evolvable, and agile architecture important?
Software architecture is the high level structure of a software system, the
discipline of creating such structures, and the documentation of these
structures.

It is the set of structures needed to reason about the software system, and
comprises the software elements, the relations between them, and the
properties of both elements and relations.

In today’s software development world, requirements change,
environments change, team members change, technologies change, and so
should the architecture of our systems.

The architecture defines the parts of a system that are hard and costly to
change. Therefore we are in need of a clean, simple, flexible, evolvable, and
agile architecture to be able to keep up with all the changes surrounding us.


## Clean architecture
An architecture that allows to replace details and is easy to verify.

The Clean Architecture
![Uncle Bob’s clean Architecture](https://cdn-images-1.medium.com/max/1400/1*D1EvAeK74Gry46JMZM4oOQ.png)

Separation of concerns
![Separation of concerns](https://cdn-images-1.medium.com/max/1400/0*JD606Sqx6RYZLKdu.)

Entities: Entities encapsulate enterprise-wide business rules. An entity can
be an object with methods, or it can be a set of data structures and
functions.

Use cases: Use cases orchestrate the flow of data to and from the entities,
and direct those entities to use their enterprise-wide business rules to
achieve the goals of the use cases.

Interface adapters: Adapters that convert data from the format most
convenient for the use cases and entities, to the format most convenient for
some external agency such as a database or the Web.

Frameworks and drivers: Glue code to connect UI, databases, devices etc.
to the inner circles.

Program Flow: Starts on the outside and ends on the outside, but can go
through several layers (user clicks a button, use case loads some entities
from DB, entities decide something that is presented on the UI).

Entities layer reused in multiple applications

![Entities layer reused in multiple applications](https://cdn-images-1.medium.com/max/800/1*yvvxfbLwUcmOqr7jvba86Q.png)

Mobile Application Example

![Mobile Client Example](https://camo.githubusercontent.com/a7db43737e1ea0578d0dad6094f3728acc2adfab/68747470733a2f2f692d6d73646e2e7365632e732d6d7366742e636f6d2f64796e696d672f49433335313030372e706e67)

### Dependency management
The concentric circles represent different areas of software. In general, the
further in you go, the higher level the software becomes. The outer circles
are mechanisms. The inner circles are policies.

Source code dependencies can only point inwards. Nothing in an inner circle
can know anything at all about something in an outer circle. Use
dependency inversion to build up the system (classes in an outer circle
implement interfaces of an inner circle or listen to events from inner
circles).

### Independent of Frameworks
The architecture does not depend on the existence of some library of
feature-laden software. This allows you to use such frameworks as tools,
rather than having to cram your system into their technical constraints.

### Testable
The business rules and use cases can be tested without UI, database, Web
server, or any other external element.

### Independent of system boundaries (UI, database, …)
The UI, database, or any other external element can easily change without
any impact on use cases and business rules.


## Simple architecture
An architecture that is easy to understand. Simplicity is, however,
subjective.

### Consistent design decisions
One problem has one solution. Similar problems are solved similarly.

### Number of concepts/technologies
Simple solutions make use of only a few different concepts and
technologies.

### Number of interactions
The less interactions the simpler the design.

A reasonable amount of components with only efferent coupling and most
of the others with preferably only afferent coupling.

### Size
Small systems/components are easier to grasp than big ones. Build large
systems out of small parts.

### Modularity
Build your system by connecting independent modules with a clearly
defined interface (e.g. with adapters).


## Flexible architecture
An architecture that supports change.

### Separation of concerns
Divide your system into distinct features with as little overlap in
functionality as possible so that they can be combined freely

### Software reflects user’s mental model
When the structure and interactions inside the software match the user’s
mental model, changes in the real world can more easily be applied in
software.

### Abstraction
Separating ideas from specific implementations provides the flexibility to
change the implementation. But beware of `over abstraction`.

### Interface slimness
Fat interfaces between components lead to strong coupling. Design the
interfaces to be as slim as possible. But beware of `ambiguous interfaces`.

### Prefer composition over inheritance
Inheritance increases coupling between parent and child, thereby limiting
reuse.

### Tangle-/cycle-free dependencies
The dependency graph of the elements of the architecture has no cycles,
thus allowing locally bounded changes.


## Evolvable architecture
An architecture that is easy to adapt step by step to keep up with changes.

### Matches current needs, not the future
The architecture of the current system should match the current needs
(functional and non-functional) – not some future ones. This results in
simpler, easier to understand solutions. Otherwise, the risk of waste is very
high.

### No dead-ends, architecture can be extended/adapted
The current architecture should be extendable and adaptable so that future
needs can be addressed. When evaluating different alternatives, choose
one that is open for change.

### Architecture agnostic components
When components don’t care about which architecture they run in, the
architecture can be changed without having to rewrite the components.

### Sacrificial architecture
When the software has outlived its architecture, throw the architecture
away and start over. This mindset can be used to build a first version with a
very simple architecture, then start over for the next.

### Rolling refactoring
When a new version of a concept is introduced, then the old one is
refactored out step by step. There can be at most two versions of a concept
in an application (and it should be temporary).

## Agile architecture
An architecture that supports agile software development by enabling the
principles of the Agile Manifesto


## Workflow
Use a top-down approach to find the architecture.

### Context
What belongs to your system and what does not? Which external services
will you use?

### Break down into parts
Split the whole into parts by applying separation of concerns and the singleresponsibility principle.

### Communication
Which data flows through which call, message or event from one part to
another? What are the properties of the channels (sync/async, reliability, …)

### Repeat for each part
Repeat the above-mentioned three steps for each part as if it were your
system.

A part is a bounded context, subsystem or component.


## Defer decisions

## Architecture influencing forces

## Architecture degrading forces

## Architecture killers


## Priorities

## Principles

## Tips and tricks

## Architectural aspects

## Documentation

## Architecture smells
