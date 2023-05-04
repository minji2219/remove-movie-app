import {Store} from '../core/heropy'

interface State{
  photo:string
  name:string
  email:string
  blog:string
  github:string
  repository:string
}
export default new Store<State>({
  photo:'https://heropy.blog/css/images/logo.png',
  name:'ming / SeoMinJi',
  email:'aabb0219@naver.com',
  blog:'https://blog.naver.com/aabb0219',
  github:'https://github.com/minji2219',
  repository:'https://github.com/minji2219/Movie-App'
})