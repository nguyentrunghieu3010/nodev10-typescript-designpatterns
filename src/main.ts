import { SingletonDemo } from './creational/singleton';
import * as abstractfactory from './creational/abstract_factory';
import { FactoryDemo } from './creational/factory';
import { BuilderDemo } from './creational/builder';

SingletonDemo.execute(false);
abstractfactory.execute(false);
FactoryDemo.execute(true);
BuilderDemo.execute(false);