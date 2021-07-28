import { Component, Host, h, Prop, State, getAssetPath } from '@stencil/core';
import { getColor, getEyes, getNose, getMouth, getRandomString } from '../../utils/utils';

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

  @Prop() src: string = null;

  @State() color: string;
  @State() eyes = "eyes1.png";
  @State() nose = "nose2.png";
  @State() mouth = "mouth10.png";

  componentDidLoad() {
    this.color = getColor(this.name);
    this.eyes = getEyes(this.name);
    this.nose = getNose(this.name);
    this.mouth = getMouth(this.name);
  }


  render() {
    return (
      <Host>
        <slot>
          {
            this.src ? (
              <img
                src={this.src}
                alt={this.name}
                style={{
                  width: this.size + "px",
                  height: this.size + "px",
                  borderRadius: this.rounded && "50%"
                }}
                onError={() => this.src = null} />
            ) : (
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
            )
          }
        </slot>
      </Host>
    );
  }

}
