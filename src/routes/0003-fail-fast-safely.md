---
title: Fail Fast... Safely
---


Ideally, security and developer productivity would go hand in hand, however, this isn’t always possible and difficult trade-offs must be considered. For established tools and technologies these tradeoffs, have in many cases, already been solved for developers. This is not the case for emerging technologies, where many aspects of secure development, previously taken for granted, must be considered in detail.


### Development Environment

Many mature technologies come with easy to set up development environments. This ability may not exist for emerging technology, so pay extra attention when configuring the development environment.

With virtualization and containerization, it is possible to quite accurately replicate production environments locally on a developer’s machine. This can help the developer iterate faster, guarantees a healthy separation between development and production environments, and should safely insulate the development environment.

If local development is not possible, for example when needing to access specialized hardware or services on a remote system, it is possible to move the development process onto the remote system. Many IDEs support the ability to perform all development activities (editing, compiling, debugging, etc.) on the remote system over a secure connection. In this scenario, a reliable internet connection is required and care must be taken to avoid mixing development and production environments.

Mixing the local and remote development strategies is riskier, but is sometimes the only feasible option. In this scenario, ensure that connections which may be insecure during purely local or remote development are secure at all times during the development process. To achieve this, it can be helpful to apply the security practices from the production environment to the development environment.


### Dependency Selection

The software ecosystems of libraries and frameworks for emerging technologies can be small and fragmented, which can make dependency selection a particular challenge. Vetting dependencies for security is more important, as smaller projects mean fewer people keeping an eye on them. The upside here is that smaller projects should be easier to vet.

Smaller projects can have fewer maintainers, which could result in fixes and support being delayed. This can hurt both security and developer productivity. It is worth considering the possibility that the maintenance team of a dependency abandons the project, making the previously mentioned problems more acute.

Two possible solutions to these problems are:
- engaging more closely with the dependency project
- developing equivalent functionality in house

This can be a tricky trade-off to make. If the dependency is integral to your project or is easy to implement, it may be worthwhile to implement the functionality yourself. Otherwise, if the dependency can be easily abstracted from the project or is difficult to implement, it may be worthwhile to see how much effort it is to upstream changes or patch the dependency.


### Secure Software Development

While the above sections focus on some areas which I believe are of particular importance for developing with emerging technologies, it’s still just software development. As such, there exists an extensive body of protocols, frameworks, and other literature about how to develop software safely. A good place to start is the NIST ['Secure Software Development Framework' (SSDF)](https://csrc.nist.gov/publications/detail/sp/800-218/final)

The downside of frameworks like the SSDF is that they are incredibly large and very general. It would be unreasonable to expect every team member to know them in detail.
So, to make the most use of these frameworks, the technical leadership of the team should distill them down to the parts relevant to the project at hand and turn them into actionable items that can be clearly communicated to the rest of the team.


### Conclusion

It is important to remember that security protocols are, in many cases, the tech industry’s equivalent to the 'written in blood' safety guidelines of other industries and that safety begins and ends with individual people.


