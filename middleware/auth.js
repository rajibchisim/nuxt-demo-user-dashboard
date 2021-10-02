export default function ({ store, redirect, route }) {
  // If the user is not authenticated
  const currentPath = route.path
  if (store.state.authenticated) {
    if (currentPath === '/' || currentPath === '/login') {
      return redirect('/users')
    }
  } else if (currentPath !== '/login') {
    return redirect('/login')
  }
}
