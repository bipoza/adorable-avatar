import { Component, Host, h, Prop, State, getAssetPath } from '@stencil/core';
import { getColor, getEyes, getNose, getMouth, getRandomString, getInitials } from '../../utils/utils';

@Component({
  tag: 'adorable-avatar',
  styleUrl: 'adorable-avatar.scss',
  shadow: true,
  assetsDirs: ['assets']
})
export class AdorableAvatar {
  @Prop() name: string = getRandomString();
  @Prop() size: number = 120;
  @Prop() rounded: boolean = false;

  @Prop() initials: boolean = false;

  @Prop() src: string = null;
  @Prop() color: string;


  @State() eyes: string;
  @State() nose: string;
  @State() mouth: string;


  componentDidLoad() {
    this.color = this.color || getColor(this.name);
    this.eyes = getEyes(this.name);
    this.nose = getNose(this.name);
    this.mouth = getMouth(this.name);
  }

  InitialsAvatar = () => {
    return (
      <div class="container" style={{
        backgroundColor: this.color,
        width: this.size + "px",
        height: this.size + "px",
        borderRadius: this.rounded && "50%"
      }}>
        <div class="initials">
          <span style={{fontSize: this.size / 2.5 + 'px' }}>{getInitials(this.name)}</span>
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
          borderRadius: this.rounded && "50%"
        }}
        loading="lazy"
        class="skeleton-loading"
        onError={() => this.src = null} />
    );
  }

  AdorableAvatar = () => {
    return (
      <div class="container" style={{
        backgroundColor: this.color,
        width: this.size + "px",
        height: this.size + "px",
        borderRadius: this.rounded && "50%"
      }}>
        <div class="face">
          <img src={getAssetPath(`./assets/eyes/${this.eyes}`)} />
          <img src={getAssetPath(`./assets/nose/${this.nose}`)} />
          <img src={getAssetPath(`./assets/mouth/${this.mouth}`)} />
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
              this.initials ? (
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
