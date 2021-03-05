import { SpotifyTrack, SpotifyPodcast } from '@components/Spotify'
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import List, { ListItem } from '@components/List'
import { Box } from '@components/Box'
import { designTokens } from '@components/Theme/designTokens'
import { format } from 'timeago.js'

const Tracks = () => {

  const { data } = useSWR('/api/top-tracks', fetcher);

  if (!data) {
    return (
      <Box center>
        Something went wrong
      </Box>
    )
  }

  return data.tracks.map((track, index) => (
    <ListItem key={index}>
      <SpotifyTrack track={track} mb={0} />
    </ListItem>
  ));
}

const RecentlyPlayed = ({tracks}) => {

  return tracks.map((track, index) => (
    <ListItem key={index}>
      <SpotifyTrack track={track} mb={0} />
    </ListItem>
  ));
}

const Subscriptions = ({podcasts}) => {

  return podcasts.map((podcast, index) => (
    <ListItem key={index}>
      <SpotifyPodcast podcast={podcast} mb={0} />
    </ListItem>
  ));
}

const ListeningTitle = ({title}) => {
  return(
    <h3>
      {title}
    </h3>
  )
}


export const ListeningMusic = () => {

  const { data } = useSWR('/api/recently-played', fetcher);

  if (!data) {
    return (
      <Box center>
        Something went wrong
      </Box>
    )
  }

  return(
    <>
      <ListeningTitle title={`Last listened tracks (${data.tracks.length}):`}/>
      <List>
        <RecentlyPlayed tracks={data.tracks} />
      </List>
      <hr/>
      <ListeningTitle title={`Most listened to tracks recently:`}/>
      <List>
        <Tracks/>
      </List>
    </>
  )
}

export const ListeningPodcasts = () => {

  const { data } = useSWR('/api/podcast-subscriptions', fetcher);

  if (!data) {
    return (
      <Box center>
        Something went wrong
      </Box>
    )
  }
  return(
    <>
      <ListeningTitle title={`Recent podcasts I've been digging:`}/>
      <List>
        <Subscriptions podcasts={data.podcasts}/>
      </List>
    </>
  )
}