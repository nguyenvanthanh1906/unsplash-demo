import createRepository from '~/api/repository'

export default (ctx, inject) => {
  inject('repositories', createRepository(ctx.$axios))
}
