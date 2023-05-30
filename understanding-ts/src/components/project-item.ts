import { Draggable } from '../models/drag-and-drop-interfaces.js';
import { Project } from '../models/project-model.js';
import { Component } from './base-component.js';
import { Autobind } from '../decorators/autobind-decorator.js';

// Project Item Class
export class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable
{
  private project: Project;

  get person() {
    if (this.project.people === 1) {
      return '1 person';
    } else {
      return `${this.project.people} persons`;
    }
  }

  @Autobind
  dragStartHandler(event: DragEvent): void {
    event.dataTransfer!.setData('text/plain', this.project.id);
    event.dataTransfer!.effectAllowed = 'move';
  }

  dragEndHandler(event: DragEvent): void {
    console.log('end drag');
  }

  constructor(hostId: string, project: Project) {
    super('single-project', hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  configure(): void {
    this.element.addEventListener('dragstart', this.dragStartHandler);
    this.element.addEventListener('dragend', this.dragEndHandler);
  }

  renderContent(): void {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent = this.person + ' assigned';
    this.element.querySelector('p')!.textContent = this.project.description;
  }
}
