import { Module } from '@nestjs/common';
import { AppSeed } from './seeds.app';
import { CategoriesSeed } from './seeds.categories';
import { UsersSeed } from './seeds.users';
import { SupportsSeed } from './seeds.supports';
import { EventsSeed } from './seeds.events';


import { CategoriesModule } from '../categories/categories.module';
import { UsersModule } from '../users/users.module';
import { PinsModule } from '../pins/pins.module';
import { EventsModule } from '../events/events.module';
import { TopicsModule } from 'src/topics/topics.module';
import { TopicsSeed } from './seeds.topics';
import { SupportsModule } from 'src/supports/supports.module';
import { PinsSeed } from './seeds.pins';
import { RepliesModule } from 'src/replies/replies.module';
import { RepliesSeed } from './seeds.replies';

@Module({
    imports: [
        CategoriesModule,
        UsersModule,
        PinsModule,
        EventsModule,
        TopicsModule,
        SupportsModule,
        RepliesModule
    ],
    providers: [
        AppSeed,
        CategoriesSeed,
        UsersSeed,
        PinsSeed,
        EventsSeed,
        TopicsSeed,
        SupportsSeed,
        RepliesSeed
    ],
})
export class SeedsModule { }
