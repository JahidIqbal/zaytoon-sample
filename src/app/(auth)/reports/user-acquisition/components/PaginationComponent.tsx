import React from "react";

interface PaginationProps {
  total: number;
  page: number;
  onChange: (page: number) => void;
  isCompact?: boolean;
  showControls?: boolean;
  showShadow?: boolean;
  color?: string;
}

const PaginationComponent = ({
  total,
  page,
  onChange,
  isCompact = false,
  showControls = true,
  showShadow = true,
  color = "primary",
}: PaginationProps) => {
  const totalPages = Math.ceil(total / 10);
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  return (
    <div
      className={`pagination-container ${isCompact ? "compact" : ""} ${showShadow ? "shadow" : ""}`}
    >
      <button
        className={`prev-button ${isFirstPage ? "disabled" : ""}`}
        onClick={() => !isFirstPage && onChange(page - 1)}
        disabled={isFirstPage}
      >
        Previous
      </button>

      {showControls && (
        <span>
          Page {page} of {totalPages}
        </span>
      )}

      <button
        className={`next-button ${isLastPage ? "disabled" : ""}`}
        onClick={() => !isLastPage && onChange(page + 1)}
        disabled={isLastPage}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationComponent;
