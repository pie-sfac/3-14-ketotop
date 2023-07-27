interface ImageStrict {
  name: ImageName;
  extension?: string;
  height?: number;
  width?: number;
}

interface ImageGeneral {
  name: string;
  extension?: string;
  height?: number;
  width?: number;
}

export type Image = ImageStrict | ImageGeneral;

type ImageName =
  | 'Album'
  | 'Contents'
  | 'Emotion_Bad_off'
  | 'Emotion_Bad_on'
  | 'Emotion_Good_off'
  | 'Emotion_Good_on'
  | 'Emotion_Normal_off'
  | 'Emotion_Normal_on'
  | 'Emotion_Very_Bad_off'
  | 'Emotion_Very_Bad_on'
  | 'Emotion_Very_Good_off'
  | 'Emotion_Very_Good_on'
  | 'Empty_center_link'
  | 'Empty_home'
  | 'Empty_membership'
  | 'Empty_person'
  | 'Empty_person2'
  | 'Img_nomal'
  | 'Logo'
  | 'Message'
  | 'Note'
  | 'Popup_exercise'
  | 'Popup_record'
  | 'Profile edit_48px'
  | 'Profile_24px'
  | 'Profile_32px'
  | 'Profile_40px'
  | 'Q_Pro_condition'
  | 'Q_Pro_condition_off'
  | 'Q_Pro_pain'
  | 'Q_Pro_pain_off'
  | 'Q_Pro_vas'
  | 'Q_Pro_vas_off'
  | 'Q_basic_choice'
  | 'Q_basic_media'
  | 'Q_basic_text'
  | 'Question'
  | 'Tiket_ac'
  | 'Tiket_dis'
  | 'Tiket_in'
  | 'pain'
  | 'thumbnails';
