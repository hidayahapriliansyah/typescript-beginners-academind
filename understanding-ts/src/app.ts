/// <reference path="models/drag-and-drop-interfaces.ts" />
/// <reference path="models/project-model.ts" />
/// <reference path="state/project-state.ts" />
/// <reference path="utils/validation.ts" />
/// <reference path="decorators/autobind-decorator.ts" />
/// <reference path="components/base-component.ts" />
/// <reference path="components/project-list.ts" />
/// <reference path="components/project-input.ts" />

namespace App {
  const prjInput = new ProjectInput();
  const activePrjList = new ProjectList('active');
  const finishedPrjList = new ProjectList('finished');
}
