import React, { Component } from "react";

interface SectionTitleProps{
  title: string
}

export default class SectionTitle extends Component<SectionTitleProps> {
  render() {
    const { title } = this.props
    return (
      <h3 className="text-xl font-bold font-krona">{title}</h3>
    );
  }
}
