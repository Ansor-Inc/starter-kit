import { createContainer, asClass, InjectionMode, asValue, asFunction } from 'awilix';
import Config from '../config';
import { InjectDependency } from './InjectDependency';
import { AwlixContainer } from '../core/InjectableDependancies';
import { MongodbDriver } from '../infra/mongo/driver';
import { RedisDriver } from '../infra/redis/driver';
import { HttpServer } from '../interfaces/http/server';
import { Application } from './application';

const container = createContainer<AwlixContainer>({
  injectionMode: InjectionMode.PROXY
});

export default container.register({
  // mongoDB: asFunction(
  //   (dependencies) => new InjectDependency(dependencies, MongodbDriver, { inject: ['config'] })
  // ).singleton() as any,
  mongoDB: asClass(MongodbDriver),
  redis: asClass(RedisDriver),
  httpServer: asClass(HttpServer).singleton(),
  application: asClass(Application),
  config: asValue(Config)
});