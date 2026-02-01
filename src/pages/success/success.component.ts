import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  audio: HTMLAudioElement | null = null;
  isPlaying = false;

  ngOnInit() {
    // Auto-play music on component load
    this.playMusic();
  }

  playMusic() {
    if (!this.audio) {
      // You can replace this with your own music file path
      // For now, using a placeholder URL - replace with actual music file
      this.audio = new Audio('assets/music/love-song.mp3');
      this.audio.loop = true;
    }
    
    this.audio.play().then(() => {
      this.isPlaying = true;
    }).catch(error => {
      console.log('Audio playback failed:', error);
    });
  }

  pauseMusic() {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  toggleMusic() {
    if (this.isPlaying) {
      this.pauseMusic();
    } else {
      this.playMusic();
    }
  }

  ngOnDestroy() {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}
