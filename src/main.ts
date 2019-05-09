import { SingletonDemo } from './creational/singleton';
import { AbstractFactoryDemo } from './creational/abstract_factory';
import { FactoryDemo } from './creational/factory';
import { BuilderDemo } from './creational/builder';
import { PrototypeDemo } from './creational/prototype';
import { AdapterDemo } from './structural/adapter';

SingletonDemo.execute(false);
AbstractFactoryDemo.execute(false);
FactoryDemo.execute(false);
BuilderDemo.execute(false);
PrototypeDemo.execute(false);
AdapterDemo.execute(true);