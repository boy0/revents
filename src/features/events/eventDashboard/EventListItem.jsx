import React from 'react';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

export default function EventListItem({event}) {
    
    return (
      <Segment.Group>
          <Segment>
              <Item.Group>
                  <Item>
                      <Item.Image size='tiny' circular src={event.hostPhotoURL} />
                      <Item.Content>
                          <Item.Header Content={event.title} />
                          <Item.Description>
                                Hosted by Bob {event.hosted}
                          </Item.Description>
                      </Item.Content>
                  </Item>
              </Item.Group>
          </Segment>
          <Segment>
              <span>
                <Icon name='clock' /> {event.date}
                <Icon name='marker' /> {event.venue}
              </span>
          </Segment>
          <Segment secondary>
                <List horizontal>
                    {event.attendees.map(attendee => (
                         <EventListAttendee key={attendee.id} attendee={attendee} />
                    ))}
                </List>
          </Segment>
          <Segment clearing>
              <span>{event.description}</span>
              <Button color='teal' floated='right' content='Viem' />
          </Segment>
      </Segment.Group>
    )
}