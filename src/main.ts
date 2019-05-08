import { SingletonDemo } from './creational/singleton';
import { AbstractFactoryDemo } from './creational/abstract_factory';
import { FactoryDemo } from './creational/factory';
import { BuilderDemo } from './creational/builder';
import { PrototypeDemo } from './creational/prototype';

SingletonDemo.execute(false);
AbstractFactoryDemo.execute(true);
FactoryDemo.execute(false);
BuilderDemo.execute(false);
PrototypeDemo.execute(false);