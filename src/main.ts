import { SingletonDemo } from './creational/singleton';
import * as abstractfactory from './creational/abstract_factory';
import * as factory from './creational/factory';
import { BuilderDemo } from './creational/builder';

SingletonDemo.execute(true);
abstractfactory.execute(false);
factory.execute(false);
BuilderDemo.execute(true);