const Rating = {
  render: (props) => {
    if (!props) {
      return '<div></div>';
    }

    return `
      <div class='rating'>
        <span>
          <i class="${
  props.value >= 1
    ? 'fa fa-star'
    : props.value >= 0.5
      ? 'fa fa-star-half-o'
      : 'fa fa-star-o'
}"></i>
        </span>
      </div>
    `;
  },
};

export default Rating;
