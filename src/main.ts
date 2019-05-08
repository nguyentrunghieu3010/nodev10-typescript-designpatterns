import { SingletonDemo } from './creational/singleton';
import * as abstractfactory from './creational/abstract_factory';
import { FactoryDemo } from './creational/factory';
import { BuilderDemo } from './creational/builder';
import { PrototypeDemo } from './creational/prototype';

SingletonDemo.execute(false);
abstractfactory.execute(false);
FactoryDemo.execute(false);
BuilderDemo.execute(false);
PrototypeDemo.execute(true);