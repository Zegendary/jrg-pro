import AV from './leancloud'

export default function (user) {
  let {id, attributes: {username}} = user || AV.User.current() || {attributes: {}}
  return {
    id: id || '',
    username: username || '',
  }
}
