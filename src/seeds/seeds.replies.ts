import { Injectable } from '@nestjs/common';
import { RepliesService } from '../replies/replies.service';

export const replies = (topics, users) => {
    const replies = [
        {
            content: 'Aperiam minima autem aliquam alias consequuntur quas magnam?',
            numberOfLikes: 0,
            createdAt: new Date()
        },
        {
            content: 'Aperiam minima autem aliquam alias consequuntur quas magnam?',
            numberOfLikes: 0,
            createdAt: new Date()
        },
        {
            content: 'Aperiam minima autem aliquam alias consequuntur quas magnam?',
            numberOfLikes: 0,
            createdAt: new Date()
        },
        {
            content: 'Aperiam minima autem aliquam alias consequuntur quas magnam?',
            numberOfLikes: 0,
            createdAt: new Date()
        },
        {
            content: 'Aperiam minima autem aliquam alias consequuntur quas magnam?',
            numberOfLikes: 0,
            createdAt: new Date()
        },
        {
            content: 'Aperiam minima autem aliquam alias consequuntur quas magnam?',
            numberOfLikes: 0,
            createdAt: new Date()
        },
        {
            content: 'Aperiam minima autem aliquam alias consequuntur quas magnam?',
            numberOfLikes: 0,
            createdAt: new Date()
        },
        {
            content: 'Aperiam minima autem aliquam alias consequuntur quas magnam?',
            numberOfLikes: 0,
            createdAt: new Date()
        }
    ]
    return replies.map((support, index) => {
        return {
            ...support,
            topicId: topics[index % topics.length],
            userId: users[index % users.length],
        }
    })
};

@Injectable()
export class RepliesSeed {
    constructor(private readonly repliesService: RepliesService) { }

    async create(topics, users) {
        console.log("Seeding replies ...");
        const promiseArray = replies(topics, users)
            .map((reply) => this.repliesService.create(reply));
        try {
            return (await Promise.all(promiseArray))
                .map((response) => {
                    console.log(response);
                    return response;
                });
        } catch (error) {
            console.error(error)
        }
    }
}