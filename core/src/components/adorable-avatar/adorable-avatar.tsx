import { Component, Host, h, Prop, State } from '@stencil/core';
import { getColor, getEyes, getNose, getMouth, getRandomString, getInitials } from '../../utils/utils';
// import images from '../../base64_assets.js';
import * as images from '../../base64_assets.json';

@Component({
  tag: 'adorable-avatar',
  styleUrl: 'adorable-avatar.scss',
  shadow: true,
  assetsDirs: ['assets']
})
export class AdorableAvatar {
  @Prop() name: string = getRandomString();
  @Prop() size: number = 120;
  @Prop() shape: 'round' | 'square' = 'square';

  @Prop() type: 'initials' | 'default' = 'default';
  @Prop() src: string = null;
  @Prop() color: string;


  @State() eyes: { name: string; base64: string; };
  @State() nose: { name: string; base64: string; };
  @State() mouth: { name: string; base64: string; };


  componentWillLoad() {
    this.color = this.color || getColor(this.name);
    this.eyes = images['eyes'].filter(item => item.name === getEyes(this.name))[0];
    this.nose = images['nose'].filter(item => item.name === getNose(this.name))[0];
    this.mouth = images['mouth'].filter(item => item.name === getMouth(this.name))[0];
  }

  InitialsAvatar = () => {
    return (
      <div class="container" style={{
        backgroundColor: this.color,
        width: this.size + "px",
        height: this.size + "px",
        borderRadius: this.shape === 'round' && "50%"
      }}>
        <div class="initials">
          <span style={{ fontSize: this.size / 2.5 + 'px' }}>{getInitials(this.name)}</span>
        </div>
      </div>
    );
  }

  ImgAvatar = () => {
    return (
      <img
        src={this.src}
        alt={this.name}
        style={{
          width: this.size + "px",
          height: this.size + "px",
          borderRadius: this.shape === 'round' && "50%"
        }}
        loading="lazy"
        class="skeleton-loading image-cover"
        onError={() => this.src = null} />
    );
  }

  AdorableAvatar = () => {
    return (
      <div class="container" style={{
        backgroundColor: this.color,
        width: this.size + "px",
        height: this.size + "px",
        borderRadius: this.shape === 'round' && "50%"
      }}>
        <div class="face">
          <img src={`data:image/png;base64, ${this.eyes['base64']}`} />
          <img src={`data:image/png;base64, ${this.nose['base64']}`} />
          <img src={`data:image/png;base64, ${this.mouth['base64']}`} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <Host>
        <slot>
          {
            this.src ? (
              <this.ImgAvatar />
            ) : (
              this.type === 'initials' ? (
                <this.InitialsAvatar />
              ) : (
                <this.AdorableAvatar />
              )
            )
          }
        </slot>
      </Host >
    );
  }

}
