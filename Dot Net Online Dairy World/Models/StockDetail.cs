using System;
using System.Collections.Generic;

namespace OnlineDairyWorld2.Models;

public partial class StockDetail
{
    public int ProductId { get; set; }

    public string? ProductImage { get; set; }

    public float? PricePerUnit { get; set; }

    public int Quantity { get; set; }

    public string StockItem { get; set; } = null!;

    public int? CategoryId { get; set; }

    public int? FarmerId { get; set; }

    public virtual Category? Category { get; set; }

    public virtual Farmer? Farmer { get; set; }
}
