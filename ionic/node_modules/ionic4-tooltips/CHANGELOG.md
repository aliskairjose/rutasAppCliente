# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [Released]

## [2.0.0]
### Added
* Angular 8 support by [jrquick17](https://github.com/jrquick17)

## [1.0.0]
### Added
* Ionic 4 support by [jrquick17](https://github.com/jrquick17)
* ARIA support by [jrquick17](https://github.com/jrquick17)
* HammerJS by [jrquick17](https://github.com/jrquick17)
* `debounce` attribute to delay tooltip by [jrquick17](https://github.com/jrquick17)

### Changed
* Use `[innerHtml]` by [gh-appdev](https://github.com/gh-appdev)

# [0.0.1]
### Added
* Allow html input ([9418e94](https://github.com/zyra/ionic-tooltips/commit/9418e94)), closes [#15](https://github.com/zyra/ionic-tooltips/issues/15)
* Concurrency ability ([#54](https://github.com/zyra/ionic-tooltips/issues/54)) ([215d1dc](https://github.com/zyra/ionic-tooltips/commit/215d1dc)), closes [#21](https://github.com/zyra/ionic-tooltips/issues/21)
* directive: add ability to offset tooltip ([#52](https://github.com/zyra/ionic-tooltips/issues/52)) ([00f15c0](https://github.com/zyra/ionic-tooltips/commit/00f15c0))
* directives: add ability to choose event depending on platform ([#53](https://github.com/zyra/ionic-tooltips/issues/53)) ([91ac6bd](https://github.com/zyra/ionic-tooltips/commit/91ac6bd))
* Ability to programmatically trigger tooltip ([#8](https://github.com/zyra/ionic-tooltips/issues/8)) ([e66f2d0](https://github.com/zyra/ionic-tooltips/commit/e66f2d0))
* Desktop support ([#11](https://github.com/zyra/ionic-tooltips/issues/11)) ([6ce8d87](https://github.com/zyra/ionic-tooltips/commit/6ce8d87))

### Fixed
* Fix ngc ([cca9cad](https://github.com/zyra/ionic-tooltips/commit/cca9cad))
* Fix for lazy loaded apps ([#10](https://github.com/zyra/ionic-tooltips/issues/10)) ([f613824](https://github.com/zyra/ionic-tooltips/commit/f613824))
* lib: resetTimer ([#32](https://github.com/zyra/ionic-tooltips/issues/32)) ([2fcc655](https://github.com/zyra/ionic-tooltips/commit/2fcc655))
* tooltip: prevent error caused by an undefined value ([4d16bd3](https://github.com/zyra/ionic-tooltips/commit/4d16bd3))
* tooltip: remove tooltips when element destroyed with event='hover' ([#33](https://github.com/zyra/ionic-tooltips/issues/33)) ([310d968](https://github.com/zyra/ionic-tooltips/commit/310d968))

### Removed
* BrowserAnimationsModule import ([1907cf8](https://github.com/zyra/ionic-tooltips/commit/1907cf8))
