import React, { Component } from "react"

type ErrorBoundaryProps = {
  children: React.ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: any) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
    }
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
