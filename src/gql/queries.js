import gql from 'graphql-tag';

export const campaigns = gql`{
  campaigns {
    id
    name
  }
}`;

export const events = gql`{
  events {
    id
    eventType
    url
    timestamp
    user {
      id
      email
    }
    campaign {
      id
      name
    }
  }
}`;

export const users = gql`{
  users {
    id
    email
  }
}`;

export const campaignByUserByEvent = gql`query CampaignByUserByEvent($campaignId:Int!){
  campaign(id:$campaignId){
    id
    users {
      id
      firstName
      lastName
      campaignEvents(campaignId:$campaignId) {
        id
        timestamp
        eventType
        link
      }
    }
  }
}`;

export const campaignByEventByUser = gql`query CampaignByEventByUser($campaignId:Int!){
  campaign(id:$campaignId){
    id
    events {
      id
      user {
        id
        firstName
        lastName
      }
      timestamp
      eventType
      link
    }
  }
}`;

export const userByCampaignByEvent = gql`query UserByCampaignByEvent($userId:Int!){
  user(id:$userId){
    id
    campaigns {
      id
      name
      userEvents(userId:$userId){
        id
        timestamp
        eventType
        link
      }
    }
  }
}`;

export const userByEventByCampaign = gql`query UserByEventByCampaign($userId:Int!){
  user(id:$userId) {
    events{
      id
      eventType
      timestamp
      url
      campaign {
        id
        name
      }
    }
  }
}`;

export const eventUserCampaigns = gql`query EventByUserByCampaign($eventId:Int!, $userId:Int!){
  event(id:$eventId) {
    id
    eventType
    timestamp
    url
    user {
      id
      email
      campaigns {
        id
        name
        userEvents(userId:$userId) {
          id
          eventType
          timestamp
          url
        }
      }
    }
  }
}
`;